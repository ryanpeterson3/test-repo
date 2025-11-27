import Image from "next/image"
import { baseUrl } from "../utils/baseUrl";

const CaptionCard = ({ content }) => {
    const { image, icon, copy } = content;

    const iconUrl = baseUrl(icon.data.attributes.url)
    const imageUrl = baseUrl(image.data.attributes.url);

    return (
        <div className="captionCard">
            <Image src={imageUrl} alt="" height={550} width={500} />

            <div className="captionCard__content">
                <div className="captionCard__icon">
                    <Image src={iconUrl} alt="" height={88} width={88} />
                </div>

                <p className="captionCard__copy">
                    {copy}
                </p>
            </div>
        </div>
    );
}

export default CaptionCard;