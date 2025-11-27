import vendors from "../../../static/vendors";
import packages from "../../../static/packages";

import {  Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';

const PAVendorPackages = () => {
    let appliancesByVendor = vendors.map(v => {
        const va = [];

        packages.forEach(p => p.items.forEach(pi => pi.vendor === v.name && va.push(pi)));

        return {
            items: va,
            ...v
        }
    });

    return (
        <div className="premierappliances__vendorpackages">
            <div className="premierappliances__vendorpackages--header">
                <h2 className="text-gold">Brands We Carry</h2>
            </div>

            <div className="premierappliances__vendorpackages--vendors">
                {appliancesByVendor.map((v, i) => <button key={i}>{v.name}</button>)}
            </div>

            <div className="premierappliances__vendorpackages--content">
                {appliancesByVendor.map((v, i) => {
                    return (
                        <div className="premierappliances__vendorpackage" key={i}>
                            <div className="premierappliances__vendorpackage--header">
                                <p className="text-bold">Now browsing:</p>
                                <Image src={v.image} alt={v.name} width={200} height={200} />
                            </div>

                            <div className="premierappliances__vendorpackage--swiper">
                                <Swiper
                                    slidesPerView="auto"
                                    modules={[Navigation, Autoplay]}
                                    // loop={true}
                                    // centeredSlides
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: true
                                    }}
                                    navigation
                                    spaceBetween={25}
                                >
                                    {v.items.map((a, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <div className="premierappliances__vendorpackage--item">
                                                    <Image src={a.image} alt={a.modelNumber} width={200} height={200} />
                                                    <p className="text-bold">{a.modelNumber}</p>
                                                    <p>{a.description}</p>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PAVendorPackages;