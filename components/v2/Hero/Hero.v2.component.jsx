import ContentWrapperV2 from "../ContentWrapper/ContentWrapperV2.component";
import { ImageLoader } from "../../../utils/imageLoader";
import HeroArrow from '../../../assets/svg/heroArrow.svg';
import Image from "next/image";

const HeroV2 = ({ 
    heroType,
    title,
    subtitle,
    copy,
    bgVideo,
    bgImage,
    bgType,
    contentImage,
    findAnApartment,
    contentReverse,
    heroArrowLeft,
    heroArrowRight,
    copyColSize,
    contentColSize,
    contentImageSize
}) => {
    const heroClasses = ['heroV2', 'sp'];
    const heroContentClasses = ['heroV2__content'];
    contentReverse && heroContentClasses.push('reverse');

    const renderBGContent = () => {
        if (bgType === 'image') {
            if (bgImage) return ImageLoader(bgImage, 'heroV2__image', '', 2560, 1360, 0.1)
        } else if (bgType === 'video') {
            if (bgVideo) return <video className="heroV2__video" src={bgVideo} autoPlay playsInline muted loop></video>
        }
    }

    return (
        <header className={heroClasses.join(' ')} data-hero={heroType}>
            {renderBGContent()}
            {heroType === 'cornerImage' && <div className="heroV2__cornerImage" data-contentsize={contentImageSize}>
                {contentImage && ImageLoader(contentImage, 'heroV2__cornerImage', '', 730, 525, 0.1)}    
            </div>}         
            {heroArrowLeft && <div className="heroV2__arrow">{ImageLoader(HeroArrow.src, '', '', 1000, 1000, 0.1)}</div>}            
            {heroArrowRight && <div className="heroV2__arrow reverse">{ImageLoader(HeroArrow.src, '', '', 1000, 1000, 0.1)}</div>}            

            <ContentWrapperV2 size="xl">
                <div className={heroContentClasses.join(' ')}>
                    <div className="heroV2__content--col" data-col="copy" data-colsize={copyColSize}>
                        {title && <h1>{title}</h1>}
                        {subtitle && <p>{subtitle}</p>}
                        {copy && <p>{copy}</p>}
                    </div>

                    <div className="heroV2__content--col" data-col="content" data-colsize={contentColSize}>
                        {heroType !== 'cornerImage' && contentImage && ImageLoader(contentImage, 'heroV2__content--image', '', 730, 525, 0.1)}
                    </div>
                </div>
            </ContentWrapperV2>
        </header>)
}

export default HeroV2;