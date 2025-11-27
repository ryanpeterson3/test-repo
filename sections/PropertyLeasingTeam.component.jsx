import CaptionCardBlock from "../components/CaptionCardBlock.component";
import LeasingSteps from "../components/LeasingSteps.component";
import { baseUrl } from "../utils/baseUrl";
import ContentWrapper from "./ContentWrapper.component";

const PropertyLeasingTeam = ({ content, steps }) => {
    const { header, copy, image  } = content;
    const subtitleImage = baseUrl(image.image.data.attributes.url);
    const subtitleIcon = baseUrl(image.subtitleIcon.data.attributes.url);
    return (
        <section className="propertyLeasingTeam">
            <ContentWrapper cssClass="suites__container sp" size="md">
                <CaptionCardBlock
                    image={subtitleImage}
                    subtitle={image.subtitle}
                    subtitleIcon={subtitleIcon}
                    header={header}
                    copy={copy}
                />
            </ContentWrapper>

            <LeasingSteps steps={steps} />
        </section>
    )
}

export default PropertyLeasingTeam;