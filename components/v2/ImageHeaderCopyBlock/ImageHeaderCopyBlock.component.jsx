import ContentWrapper from "../../../sections/ContentWrapper.component";
import { ImageLoader } from "../../../utils/imageLoader";
import { renderRichText } from "../../../utils/renderRichText";

const ImageHeaderCopyBlock = ({ id, type, header, copy, disclaimer, backgroundImage, image, btnHref, btnCopy }) => {
    const styles = {
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    
    if (type === 'a') {
        return (
            <section className="sp" style={styles} id={id} data-aos="fade">
                <ContentWrapper size="xl">
                    <div className="imageHeaderCopyBlock" type="a">
                        <div className="imageHeaderCopyBlock__image">
                            {image && ImageLoader(image, '', '', 750, 750, 0.1)}
                        </div>

                        <div className="imageHeaderCopyBlock__content">
                            <div className="imageHeaderCopyBlock__header">
                                <h2>{header}</h2>
                            </div>

                            <div className="imageHeaderCopyBlock__copy">
                                <div dangerouslySetInnerHTML={{ __html: renderRichText(copy) }} />
                                {btnHref && btnCopy && <a href={btnHref} target="_blank" rel="noreferrer" className="btn">{btnCopy}</a>}
                                <span>{disclaimer}</span>
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
            </section>
        );
    }
}

export default ImageHeaderCopyBlock;