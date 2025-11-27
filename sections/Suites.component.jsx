import { baseUrl } from "../utils/baseUrl";

import ContentWrapper from "./ContentWrapper.component";
import CaptionCardBlock from "../components/CaptionCardBlock.component";

const Suites = ({ name, content, v2 }) => {
    const { image, copy } = content;
    const imageUrl = baseUrl(image.image.data.attributes.url);
    const subtitleIcon = image.subtitleIcon.data ? baseUrl(image.subtitleIcon.data.attributes.url) : null;
    const subtitle = content.image.subtitle ? content.image.subtitle : <>Make Your Home at <br/>{name}</>;
   
    return (
        <>
            <ContentWrapper cssClass="suites__container" size="md" padding="sp-bottom">
                <CaptionCardBlock
                    header="Upgrade Your Lifestyle"
                    image={imageUrl}
                    subtitle={subtitle}
                    subtitleIcon={subtitleIcon}
                    copy={copy}
                    btnCopy="Explore Your Options"
                    href="#listings"
                />
            </ContentWrapper>
        </>
    );
}

export default Suites;