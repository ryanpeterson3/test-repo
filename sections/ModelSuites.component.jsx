import ContentWrapper from "./ContentWrapper.component";
import ImageCard from "../components/ImageCard.component";
import SwiperControls from '../components/SwiperControls.component';

import {  Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ModelSuites = ({ items }) => {
    return (
        <section id="suites" className="suites sp" data-items={items.length}>
            <ContentWrapper cssClass="suites__cards" size="xl" aosFade>
                {items.map((item, i) => {
                    const { title, copy, link, image } = item;
                    return (<ImageCard key={Math.random()} header={title} copy={copy} image={image} link={link} cardIndex={i} />)
                })}
            </ContentWrapper>

            <ContentWrapper cssClass="suites__swiper--controls">
                <SwiperControls swiperName="suites" orientation="horizontal" />
            </ContentWrapper>

            <div className="suites__swiper themeSwiper">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        prevEl: '.suitesPrev',
                        nextEl: '.suitesNext',
                    }}
                    pagination={{
                        clickable: true
                    }}
                    className="paginationMargin"
                    spaceBetween={25}
                    slidesPerView="auto"
                >
                    {items.map((item, i) => {
                        const { title, copy, link, image } = item;

                        return (
                            <SwiperSlide key={Math.random()}>
                                <ImageCard header={title} copy={copy} image={image} link={link} cardIndex={i} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default ModelSuites;