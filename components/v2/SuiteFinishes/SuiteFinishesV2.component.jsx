import ContentWrapper from "../../../sections/ContentWrapper.component";
import { ImageLoader } from "../../../utils/imageLoader";

import {  Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const SuiteFinishesV2 = ({ header, items, gallery, pdf, btnCopy }) => {
    return (
            <section className="suiteFinishesV2 sp" data-aos="fade">
                <ContentWrapper>
                    <div className="suitesFinishesV2__list--wrapper">
                        <div className="suites__list">
                            <h2 className="themeHeader">{header}</h2>
                            <ul>
                                {items.map((item, i) => <li className="themeListItem" key={i}>{item}</li>)}
                            </ul>

                            {pdf && btnCopy && <a target="_blank" rel="noreferrer" href={pdf}><div className="btn themeBtn">{btnCopy}</div></a>}
                        </div>
                    </div>

                    <div className="suiteFinishesV2__gallery themeSwiper">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay,]}
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
                                return (
                                    <SwiperSlide key={i}>
                                        <div className="suiteFinishesV2__gallery--item">
                                            {ImageLoader(image, '', '', 773, 500, 10)}
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </ContentWrapper>
            </section>
    )
}

export default SuiteFinishesV2;

