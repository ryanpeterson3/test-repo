import Link from "next/link";
import ImageBlock from "../components/ImageBlock";
import { baseUrl } from "../utils/baseUrl";
import { pageIsActive } from "../utils/pageIsActive";
import ContentWrapper from "./ContentWrapper.component";

const HerosRidge = ({ content }) => {
    let { image, header, copy } = content;

    const cardImage = baseUrl(image.image.data.attributes.url);
    const cardIcon = baseUrl(image.icon.data.attributes.url);

    return (
        <section className="herosRidge sp">
           <ContentWrapper size="sm">
                <div className="herosRidge__container">
                    <div className="herosRidge__image">
                        {/* <CaptionCard content={image} /> */}
                        <ImageBlock image={cardImage} icon={cardIcon} subtitle={image.copy} />
                    </div>
        
                    <div className="herosRidge__content">
                        <h2 className="herosRidge__header">
                            {header}
                        </h2>

                        <p className="herosRidge__copy rt copyPadding">
                            {copy}
                        </p>

                        {pageIsActive.about && <Link href="/about">
                            <div className="btn">Learn More</div>
                        </Link>}
                    </div>
                </div>
           </ContentWrapper>
        </section>
    )
}

export default HerosRidge;