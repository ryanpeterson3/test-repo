import Image from "next/image";
import { baseUrl } from "../../../utils/baseUrl";
import ContentWrapper from "../../../sections/ContentWrapper.component";

import {  Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { useEffect, useState } from 'react';

import HeroArrow from '../../../assets/svg/heroArrow.svg';
import MediaCard from "../MediaCard/MediaCard.component";
import PropertyFeatureSVG from "../../v2/PropertyFeatureSVG/PropertyFeatureSVG.component";
import { ImageLoader } from "../../../utils/imageLoader";

const FeatureCarousel = ({ features, copy, amenities }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    let pdf = features.pdf.data ? baseUrl(features.pdf.data.attributes.url) : null;
    if (!pdf.includes('http')) pdf = `https://${pdf}`;

    const slideTo = (swiper) => {
        if (swiper.clickedIndex) {
            setCurrentSlide(swiper.realIndex);
        } else {
            setCurrentSlide(swiper.realIndex);
        }
    }

    return (
        <section id="" className="">
            <ContentWrapper cssClass="featureCarousel">
                {amenities.map((a, i) => {
                    const classes = ['featureCarousel__row'];
                    i === currentSlide && classes.push('active');

                    const image = a.cardImage ? baseUrl(a.cardImage) : null;

                    return (
                        <>
                            <div className={classes.join(' ')} data-row="image">
                                {image && ImageLoader(image, '', a.copy, 1250, 600)}
                            </div>

                            <div className={classes.join(' ')} data-row="info">
                                <div className="featureCarousel__row--header">
                                    <div className="themeBGDark featureCarousel__row--icon">
                                        <PropertyFeatureSVG name={a.header} />
                                    </div>
                                    
                                    <h3 className="themeHeader">{a.header}</h3>
                                </div>
                                <p>{a.copy}</p>
                            </div>
                        </>
                    )
                })}

                <div className="featureCarousel__row" data-row="swiper">
                    <div className="featureCarousel__overlay left"></div>
                    <div className="featureCarousel__overlay right"></div>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        slidesPerView="auto"
                        className="featureCarousel__swiper"
                        centeredSlides={true}
                        loop={true}
                        onSlideChange={(swiper) => slideTo(swiper)}
                        onClick={(swiper) => slideTo(swiper)}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true
                        }}
                    >
                        {amenities.map((a, i) => {
                            const image = a.cardImage ? baseUrl(a.cardImage) : null;

                            return (
                                <SwiperSlide className="themeBGDark" key={i} test="fff">
                                    {image && ImageLoader(image, '', a.copy, 1250, 600)}
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </ContentWrapper>
        </section>
    )
}

export default FeatureCarousel;