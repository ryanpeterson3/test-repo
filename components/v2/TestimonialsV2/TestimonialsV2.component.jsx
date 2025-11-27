import { useState, useEffect } from 'react';

import InfoCard from '../../../components/InfoCard.component';

import HeroArrow from '../../../assets/svg/heroArrow.svg';

import {  Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ContentWrapper from '../../../sections/ContentWrapper.component';
import SwiperVertical from '../../../components/SwiperVertical.component';
import SwiperControls from '../../../components/SwiperControls.component';

import PlayButton from '../../../assets/svg/playButton.svg';

import { ImageLoader } from '../../../utils/imageLoader';
import AppPopup from '../../AppPopup.component';


const TestimonialsV2 = ({ testimonials }) => {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    useEffect(() => {
        // Reset current testimonial index whenever page is loaded
        setCurrentTestimonialIndex(0);
    }, []);

    const VideoTrigger = <div className="testimonialsV2__video">{ImageLoader(PlayButton.src, '', '', 100, 100, 0.1)}</div>;

    const TestimonialsV2Content = ({ testimonial }) => {
        const { image, video } = testimonial;
        return <div data-aos="fade">
            {ImageLoader(image, '', '', 953, 640, 10)}
            {video && <AppPopup trigger={VideoTrigger} video={video} />}    
        </div>
    }

    return (
        <section id="testimonials" className="testimonialsV2">
            {ImageLoader(HeroArrow.src, 'testimonialsV2__arrow', '', 1000, 1000, 0.1)}
            <ContentWrapper size="xl">
                <div className="testimonialsV2__swiper--wrapper">
                    <div className="testimonialsV2__swiper" data-swiper="desktop">
                        <div className="testimonialsV2__swiper--overlay" data-overlay="top"></div>
                        <div className="testimonialsV2__swiper--overlay" data-overlay="bottom"></div>
                        <SwiperVertical
                            prev='.testimonialsV2Prev'
                            next='.testimonialsV2Next'
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
                                            type="testimonialV2"
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

                    <div className="testimonialsV2__swiper--controls" data-swiper="testimonials">
                        <SwiperControls swiperName="testimonialsV2" orientation="horizontial" />
                    </div>

                    <div className="testimonialsV2__swiper--content">
                        <div className="testimonialsV2__swiper--content-wrapper">
                            <h2 className="themeHeader">Testimonials</h2>
                            <TestimonialsV2Content testimonial={testimonials[currentTestimonialIndex]} />
                        </div>
                    </div>

                </div>
            </ContentWrapper>

            <div className="testimonialsV2__swiper" data-swiper="mobile" data-aos="fade">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        prevEl: '.testimonialsV2Prev',
                        nextEl: '.testimonialsV2Next'
                    }}
                    pagination={{clickable: true}}
                    spaceBetween={25}
                    slidesPerView="auto"
                    centeredSlides={true}
                    loop={true}
                    className="paginationMargin"
                    
                >
                    {testimonials.map((t, i) => {
                        const { name, description, copy, image, video } = t;
                            return (
                            <SwiperSlide key={i}>
                                <InfoCard
                                    type="testimonialV2"
                                    title={name}
                                    date={description}
                                    preview={copy}
                                    image={image}
                                    video={video}
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

export default TestimonialsV2;