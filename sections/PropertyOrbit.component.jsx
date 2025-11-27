import ContentWrapper from "./ContentWrapper.component";
import { useEffect, useState } from 'react';

const PropertyOrbit = ({ video, v3 }) => {
    const [videoSrc, setVideoSrc] = useState(null);

    const classes = [];
    v3 ? classes.push('propertyOrbitV3') : classes.push('propertyOrbit');

    useEffect(() => {
        const el = document.getElementById("propertyOrbit");
        if (el) {
            const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && setVideoSrc(video)));
            observer.observe(el);
        }
    }, []);

    if (v3) {
        return (
            <section className="propertyOrbitV3" id="propertyOrbit">
                {video && <video id="orbit" src={videoSrc} playsInline autoPlay muted loop></video>}
            </section>
        )
    } else {
        return (<section className="propertyOrbit" id="propertyOrbit">
            <ContentWrapper size="xl">
                {video && <video id="orbit" src={videoSrc} playsInline autoPlay muted loop></video>}
            </ContentWrapper>
        </section>)
    }
}

export default PropertyOrbit;