import {  Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';

import vendors from '../../../static/vendors';

const PAVendors = () => {
    return (
        <section className="premierappliances__vendors" id="vendors">
            <div className="pa-grid">
                <div className="premierappliances__vendors--content">
                    <h2 className="text-gold" data-aos="fade-left">Brands We Carry</h2>
                </div>
            </div>

            <div className="premierappliances__swiper">
                <Swiper
                    slidesPerView="auto"
                    slidesPerGroup={1}
                    modules={[Pagination, Navigation, Autoplay]}
                    loop={true}
                    centeredSlides
                    pagination={{
                        el: '.vendorsSwiper__pagination',
                        clickable: true
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true
                    }}
                    navigation
                    spaceBetween={25}
                >
                    {vendors.map((v, i) => (
                        <SwiperSlide key={i}>
                            <div className="premierappliances__vendor">
                                <Image src={v.image} alt={v.name} height={200} width={200} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="vendorsSwiper__pagination"></div>
            </div>
      </section>
    )
}

export default PAVendors;