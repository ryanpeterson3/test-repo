import { renderRichText } from "../utils/renderRichText";
import ContentWrapper from "./ContentWrapper.component";

const HeroVideo = ({ header, video }) => {
    return (
        <header className="heroVideo">
            <video src={video} autoPlay playsInline muted loop></video>
            <div className="contentWrapper" data-wrapper="xl" dangerouslySetInnerHTML={{ __html: renderRichText(header) }} />
        </header>
    )
}

export default HeroVideo;