import FeatureCard from "../components/FeatureCard.component";
import ContentWrapper from "./ContentWrapper.component";

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Overview = ({ content }) => {
    const { header, copy, items } = content;

    return (
            <section className="overview sp">
                <ContentWrapper size="lg">
                    <div className="overview__content">
                        <h2 className="overview__title">{header}</h2>
                        <p className="overview__copy copyPadding">{copy}</p>
                    </div>

                    <div className="overview__cards">
                        {items.map((card, i) => <FeatureCard key={i} card={card} />)}
                    </div>
                </ContentWrapper>

                <div className="overview__swiper">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={25}
                        centeredSlides
                        slidesPerView="auto"
                        className="paginationMargin"
                        loop={true}
                    >
                        {items.map((card, i) => {
                            return (
                                <SwiperSlide key={i} >
                                    <FeatureCard card={card} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
        </section>
    );
}

export default Overview;