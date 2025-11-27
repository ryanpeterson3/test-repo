import {  Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ContentWrapper from "./ContentWrapper.component";
import InfoCard from '../components/InfoCard.component';
import Link from 'next/link';
import SwiperControls from '../components/SwiperControls.component';

import { pageIsActive } from "../utils/pageIsActive";

const LatestNews = ({ header, copy, posts, newsroom }) => {
    return (
        <section id="latestNews" className="latestNews sp" data-aos="fade">
            <ContentWrapper size="xl">
                <div className="latestNews__content">
                    <div className="latestNews__header">
                        <h2>{header}</h2>
                    </div>

                    <div className="latestNews__copy">
                        {copy && <p>{copy}</p>}
                        <div className="latestNews__swiper--controls">
                            <SwiperControls swiperName="latestNews" orientation="horizontial" />
                        </div>
                    </div>
                </div>
            </ContentWrapper>

            <ContentWrapper size="xl" mobileFullSwiper>
                <div className="latestNews__swiper">
                    <div className="overlay"></div>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={{
                            prevEl: '.latestNewsPrev',
                            nextEl: '.latestNewsNext'
                        }}
                        pagination={{ clickable: true }}
                        spaceBetween={25}
                        slidesPerView="auto"
                        className="paginationMargin"
                    >
                        {posts.map((post, i) => {
                            const { title, date, preview, slug, images } = post;

                            return (
                                <SwiperSlide key={i}>
                                    <InfoCard
                                        type="news"
                                        title={title}
                                        date={date}
                                        preview={preview}
                                        slug={slug}
                                        image={images.thumbnail}
                                        i={i}
                                    />
                                </SwiperSlide>
                            )
                        })}
                   </Swiper>
                </div>

                {newsroom &&  <div className="latestNews__btn" size="lg">
                    <Link href="/newsroom">
                        <div className="btn">View Lépine Newsroom</div>
                    </Link>
                </div>}
            </ContentWrapper>
        </section>
    )
}

export default LatestNews;