import { useState, useEffect } from 'react';

import ContentWrapper from "./ContentWrapper.component";
import InfoCard from '../components/InfoCard.component';
import TestimonialsContent from '../components/TestimonialsContent.component';

import {  Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperVertical from '../components/SwiperVertical.component';
import SwiperControls from '../components/SwiperControls.component';


const Testimonials = ({ testimonials }) => {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [fadeInContent, setFadeInContent] = useState(false);
    
    const testimonialContentClasses = ['testimonials__swiper--content-wrapper', 'themeBGDark'];
    fadeInContent == true ? testimonialContentClasses.push('fadeIn') : testimonialContentClasses.push('fadeOut');

    useEffect(() => {
        // Reset current testimonial index whenever page is loaded
        setCurrentTestimonialIndex(0);
    }, [])

    useEffect(() => {
        setFadeInContent(false);
        window.setTimeout(() => {setFadeInContent(true)}, 50)
    }, [currentTestimonialIndex]);

    return (
        <section className="testimonials sp-bottom themeBGDark">
            <ContentWrapper size="lg">
                <div className="testimonials__swiper--wrapper">
                    <div className="testimonials__swiper" data-swiper="desktop">
                        <div className="testimonials__swiper--overlay" data-overlay="top"></div>
                        <div className="testimonials__swiper--overlay" data-overlay="bottom"></div>
                        <SwiperVertical
                            prev='.testimonialsPrev'
                            next='.testimonialsNext'
                            height={825}
                            loop
                            currentContentIndex={currentTestimonialIndex}
                            setCurrentContentIndex={setCurrentTestimonialIndex}
                            centeredSlides
                        >
                            {testimonials.map((t, i) => {
                                const { name, description, copy, image  } = t;
                                return (
                                    <SwiperSlide key={i} index={i}>
                                        <InfoCard
                                            type="testimonial"
                                            title={name}
                                            date={description}
                                            preview={copy}
                                            i={i}
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </SwiperVertical>
                    </div>

                    <div className="testimonials__swiper--controls" data-swiper="testimonials">
                        <SwiperControls swiperName="testimonials" orientation="horizontial" />
                    </div>

                    <div className="testimonials__swiper--content">
                        <div className={testimonialContentClasses.join(' ')}>
                            <TestimonialsContent testimonial={testimonials[currentTestimonialIndex]} />
                        </div>
                    </div>

                </div>
            </ContentWrapper>

            <div className="testimonials__swiper" data-swiper="mobile">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        prevEl: '.testimonialsPrev',
                        nextEl: '.testimonialsNext'
                    }}
                    pagination={{clickable: true}}
                    spaceBetween={25}
                    slidesPerView="auto"
                    centeredSlides={true}
                    loop={true}
                    className="paginationMargin"
                    
                >
                    {testimonials.map((t, i) => {
                        const { name, description, copy, image, video, type  } = t;
                            return (
                            <SwiperSlide key={i}>
                                <InfoCard
                                    type="testimonial"
                                    title={name}
                                    date={description}
                                    preview={copy}
                                    image={image}
                                    video={video}
                                    contentType={type}
                                    i={i}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials;