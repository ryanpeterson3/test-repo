import ContentWrapper from "../../../sections/ContentWrapper.component";
import YouTubeIcon from '../../../assets/svg/icon-youtube.svg';
import PlayButton from '../../../assets/svg/playButton.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ImageLoader } from "../../../utils/imageLoader";
import AppPopup from "../../AppPopup.component";

const YouTubeBar = ({ items, copy, ctaHref, ctaCopy }) => {
    const AppPopupTrigger = () => ImageLoader(PlayButton.src, '', '', 100, 100, 0.1);

    return <div className="youtubeBar">
        <ContentWrapper cssClass="youtubeBar__content" size="xl">
            <div className="youtubeBar__copy youtubeBar__content--item">
                <p className="jostSemiBold">{copy}</p>

                <a className="youtubeBar__cta youtubeBar__content--item" href={ctaHref} target="_blank" rel="noreferrer">
                    {ImageLoader(YouTubeIcon.src, '', '', 47, 56, 0.1)}
                    <p className="jostBold">{ctaCopy}</p>
                </a>
            </div>

            <div className="youtubeBar__items" data-aos="fade">
                <div className="overlayL"></div>
                <div className="overlayR"></div>

                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={10}
                    slidesPerView="auto"
                    centeredSlides={true}
                    loop={true}
                    
                    >
                        {items.map((item, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="youtubeBar__item">
                                <div className="youtubeBar__item--overlay">
                                    <AppPopup trigger={AppPopupTrigger} video={item.href} />
                                </div>
                                {ImageLoader(item.image, '', '', 330, 190, 0.1)}
                            </div>
                            </SwiperSlide>
                        )
                    })}
                    </Swiper>
            </div>
        </ContentWrapper>
    </div>
}

export default YouTubeBar;