import Link from 'next/link';
import ContentWrapper from '../../sections/ContentWrapper.component';
import { baseUrl } from '../../utils/baseUrl';
import { ImageLoader } from '../../utils/imageLoader';
import { renderRichText } from '../../utils/renderRichText';
import Container from '../Container.component';

const BlogPost = ({ post }) => {
    const Header = ({ obj }) => {
        switch (obj.element) {
            case 'h1':
                return (<div className="blogPost__header" data-header={obj.element}><h1>{obj.text}</h1></div>);
            case 'h2':
                return (<div className="blogPost__header" data-header={obj.element}><h2>{obj.text}</h2></div>);
            case 'h3':
                return (<div className="blogPost__header" data-header={obj.element}><h3>{obj.text}</h3></div>);
            case 'h4':
                return (<div className="blogPost__header" data-header={obj.element}><h4>{obj.text}</h4></div>);
            case 'h5':
                return (<div className="blogPost__header" data-header={obj.element}><h5>{obj.text}</h5></div>);
            case 'h6':
                return (<div className="blogPost__header" data-header={obj.element}><h6>{obj.text}</h6></div>);
            default:
                return (<div className="blogPost__header" data-header={obj.element}><h1>{obj.text}</h1></div>);
        }
    }

    const Copy = ({ obj }) => {
        return (<div className="blogPost__copy" dangerouslySetInnerHTML={{ __html: renderRichText(obj.text) }} />);
    }

    const List = ({ obj }) => {
        switch (obj.type) {
            case "unordered":
                return (<div className="blogPost__list" data-list={obj.type} data-list-alignment={obj.listAlignment}>
                    {obj.header.text && <Header obj={obj.header} />}
                    <ul>{obj.items.map((item, i) => <li key={i}>{item.text}</li>)}</ul>
                </div>);
            case "ordered":
                return (<div className="blogPost__list" data-list={obj.type} data-list-alignment={obj.listAlignment}>
                    {obj.header.text && <Header obj={obj.header} />}
                    <ol>{obj.items.map((item, i) => <li key={i}>{item.text}</li>)}</ol>
                </div>);
            default:
                return null;
        }
    }

    const Image = ({ obj }) => {
        const url = baseUrl(obj.data.attributes.url);
        const { width, height, caption, alternativeText } = obj.data.attributes;

        return (
            <div className="blogPost__image">
                {ImageLoader(url, '', alternativeText, width, height, 0.1)}
                {caption && <p className="blogPost__image--caption">{caption}</p>}
            </div>
        )
    }

    const ImageAndCopy = ({ obj }) => {
        return (
            <div className="blogPost__imageAndCopy" data-image-alignment={obj.imageAlignment}>
                <Image obj={obj.image} caption={obj.caption} alt={obj.caption} />
                <Copy obj={obj.copy} />
            </div>
        )
    }

    const HeaderImage = ({ obj }) => {
        const url = baseUrl(obj.data.attributes.url);
        const { width, height, alternativeText } = obj.data.attributes;

        return <div className="blogPost__headerImage">
            {ImageLoader(url, '', alternativeText, width, height, 0.1)}
        </div>
    }

    const YouTubeEmbed = ({ obj }) => {
        const res = JSON.parse(obj.url);
        return <div className="blogPost__YouTube" dangerouslySetInnerHTML={{__html: res.rawData.html }}></div>
    }

    const BlogContent = ({ obj }) => {
        switch (obj.__component) {
            case 'blog.blog-header':
                return (<Header obj={obj} />);

            case 'blog.blog-copy':
                return (<Copy obj={obj} />);

            case 'blog.blog-list':
                return (<List obj={obj} />);

            case 'blog.blog-image':
                return (<Image obj={obj} />);

            case 'blog.blog-image-and-copy':
                return (<ImageAndCopy obj={obj} />);

            case 'blog.blog-header-image':
                return (<HeaderImage obj={obj.image} />);

            case 'blog.blog-you-tube':
                return (<YouTubeEmbed obj={obj} />);
            default:
                return null;
        }
    }

    return (
            <Container page="homeV2">
                {post.content.map((obj, i) => obj.__component === 'blog.blog-header-image' && <BlogContent key={i} obj={obj} />)}
                <ContentWrapper cssClass="blogPost" size="lg">
                    {post.content.map((obj, i) => obj.__component !== 'blog.blog-header-image' && <BlogContent key={i} obj={obj} />)}
                    
                </ContentWrapper>
                <Link href="/newsroom" className="btn blogPost__return">
                    Return to Newsroom
                </Link>
            </Container>
    )
}

export default BlogPost;