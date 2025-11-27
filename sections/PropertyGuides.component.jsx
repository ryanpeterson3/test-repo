import { baseUrl } from "../utils/baseUrl";
import GuideCard from "../components/GuideCard.component";

import {  Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PropertyGuides = ({ guides }) => {
    const downsizingImg = baseUrl(guides.downsizing.data.attributes.url);
    const downPaymentImg = baseUrl(guides.downPayment.data.attributes.url);

    return (
        <div className="propertyGuides__container">
            <section className="propertyGuides" data-screen="desktop">
                <GuideCard
                    header="upgrade your lifestyle"
                    copy="Includes a checklist to help you stay organized while planning your move"
                    image={downsizingImg}
                    link="https://ebook.lepineapartments.com/upgrade-your-lifestyle-at-lepine"
                />
                <GuideCard
                    header="saving for your first home"
                    copy="Live in your dream apartment today while saving for tomorrow"
                    image={downPaymentImg}
                    link="https://ebook.lepineapartments.com/your-home-buying-journey"
                />
            </section>

            <section className="propertyGuides themeSwiper" data-screen="mobile">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{
                        clickable: true
                    }}
                    spaceBetween={25}
                    slidesPerView="auto"
                    className="paginationMargin"
                >
                    <SwiperSlide>
                        <GuideCard
                            header="upgrade your lifestyle"
                            copy="Includes a checklist to help you stay organized while planning your move"
                            image={downsizingImg}
                            link="downsizing"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <GuideCard
                            header="saving for your first home"
                            copy="Live in your dream apartment today while saving for tomorrow"
                            image={downPaymentImg}
                            link="downpayment"
                        />
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
}

export default PropertyGuides;