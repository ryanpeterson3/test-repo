import {  Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';

const SwiperVertical = ({ children, prev, next, height, loop, currentContentIndex, setCurrentContentIndex, centeredSlides, breakpoints }) => {
    return (
        <Swiper
            key={currentContentIndex}
            modules={[Navigation]}
            navigation={{
                prevEl: prev,
                nextEl: next,
            }}
            spaceBetween={40}
            slidesPerView="auto"
            direction="vertical"
            centeredSlides={centeredSlides}
            height={height}
            loop={loop}
            onActiveIndexChange={swiper => setCurrentContentIndex(swiper.realIndex)}
            initialSlide={currentContentIndex}
            breakpoints={breakpoints}
        >
            {children}
        </Swiper>
    )
}

export default SwiperVertical;