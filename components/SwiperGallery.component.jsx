import SwiperControls from './SwiperControls.component';

import {  Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const SwiperGallery = ({ children }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination
            spaceBetween={25}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
        >
            {children}
        </Swiper>
    )
}

export default SwiperGallery;