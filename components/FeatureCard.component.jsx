import { baseUrl } from "../utils/baseUrl";
import { ImageLoader } from "../utils/imageLoader";

const FeatureCard = ({ card }) => {
    const { icon, header, copy } = card;

    const iconUrl = baseUrl(icon.data.attributes.url);
    const desktopImage = baseUrl(card.desktopImage.data.attributes.url);
    const mobileImage = baseUrl(card.mobileImage.data.attributes.url);

    return (
        <div className="featureCard">
            <div className="featureCard__content">
                <div className="featureCard__icon">
                    {ImageLoader(iconUrl, '', header, 100, 100, 10)}

                </div>
                <h3 className="featureCard__header">{header}</h3>
                <p className="featureCard__copy rt">{copy}</p>
            </div>
            
            <div className="featureCard__image" data-image="desktop">
                {ImageLoader(desktopImage, '', '', 419, 476, 10)}
            </div>
            
            <div className="featureCard__image" data-image="mobile">
                {ImageLoader(mobileImage, '', '', 450, 300, 10)}
            </div>
        </div>
    )
}

export default FeatureCard;