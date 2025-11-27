import ContentWrapper from "../sections/ContentWrapper.component";

import { baseUrl, baseUrlPDF } from "../utils/baseUrl";
import { ImageLoader } from "../utils/imageLoader";

import {  Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const SuiteFinishes = ({ phase, items, gallery, pdf }) => {
    const pdfUrl = pdf.data ? baseUrlPDF(pdf.data.attributes.url) : false;

    return (
            <section className="suiteFinishes sp">
                    <div className="suitesFinishes__list--wrapper">
                        <ContentWrapper>
                            <div className="suites__list">
                                <h2 className="themeHeader">Suite Finishes</h2>
                                <ul>
                                    {items.map((item, i) => <li className="themeListItem" key={i}>{item.copy}</li>)}
                                </ul>

                                {pdf && <a target="_blank" rel="noreferrer" href={pdfUrl}><div className="btn themeBtn">Suite Finishes and Features</div></a>}
                            </div>
                        </ContentWrapper>
                    </div>

                    <div className="suiteFinishes__gallery themeSwiper">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{
                            clickable: true
                        }}
                        spaceBetween={25}
                        slidesPerView="auto"
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                        }}
                        className="paginationMargin"
                    >
                        {gallery.map((image, i) => {
                            const url = baseUrl(image);

                            return (
                                <SwiperSlide key={i}>
                                    <div className="suiteFinishes__gallery--item">
                                        {ImageLoader(url, '', '', 773, 500, 10)}
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    </div>
            </section>
    )
}

export default SuiteFinishes;

