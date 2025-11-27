import Image from "next/image";
import { baseUrl } from "../utils/baseUrl";
import ContentWrapper from "./ContentWrapper.component";

import {  Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';

import Lightbox from "../components/Lightbox.component";
import { submitGAEvent } from "../utils/submitGAEvent";

const PropertyFeatures = ({ features, copy, amenities, gallery }) => {
    const desktopImage = features.desktopImage.data ? baseUrl(features.desktopImage.data.attributes.url) : null;
    const mobileImage = features.mobileImage.data ? baseUrl(features.mobileImage.data.attributes.url) : null;
    let pdf = features.pdf.data ? baseUrl(features.pdf.data.attributes.url) : null;
    if (!pdf.includes('http')) pdf = `https://${pdf}`;

    const [galleryImages, setGalleryImages] = useState([]);
    const [galleryActive, setGalleryActive] = useState(false);

    const getAmenityImages = () => {
        const items = [];

        gallery.forEach(item => {
            const url = baseUrl(item);
            items.push(url);
        });

        setGalleryImages(items);
    }

    useEffect(() => {
        getAmenityImages();
    }, []);

    return (
        <section id="propertyFeatures" className="propertyFeatures sp themeBGLight">
                {desktopImage && <div className="propertyFeatures__image" data-background="desktop">
                    <Image src={desktopImage} alt="" height={780} width={960} />
                </div>}

                {mobileImage && <div className="propertyFeatures__image" data-background="mobile">
                    <Image src={mobileImage} alt="" height={560} width={1024} />
                </div>}

                <div className="propertyFeatures__container">
                <ContentWrapper size="md">
                    <div className="propertyFeatures__content">
                        <div className="propertyFeatures__header">
                            <h2>Property Features</h2>
                        </div>

                        <div className="propertyFeatures__copy">
                            <p>{copy}</p>
                        </div>

                        <div className="propertyFeatures__btn">
                            {pdf && <a href={pdf} target="_blank" rel="noreferrer" className="btn themeBtn" onClick={() => submitGAEvent('download_property_amenity_map')}>View Property Amenity Map</a>}
                        </div>
                    </div>

                    <div className="propertyFeatures__cards">
                        {amenities.map((amenity, i) => {
                            const icon = amenity.icon ? baseUrl(amenity.icon) : null;
                            const header = amenity.header;

                            if (icon) {
                                return (
                                    <div key={i} className="propertyFeaturesCard">
                                        <div className="propertyFeaturesCard__icon">
                                            {icon && <Image src={icon} alt={header} height={86} width={86} />}
                                        </div>
                                        <p className="propertyFeaturesCard__copy">{header}</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </ContentWrapper>

                <div className="propertyFeatures__swiper">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{
                            clickable: true
                        }}
                        spaceBetween={25}
                        slidesPerView="auto"
                        centeredSlides={true}
                        loop={true}
                        className="paginationMargin"
                    >
                        {amenities.map((amenity, i) => {
                            const icon = amenity.icon ? baseUrl(amenity.icon) : null;
                            const header = amenity.header;
                            return (
                                <SwiperSlide key={i}>
                                    <div  className="propertyFeaturesCard">
                                        <div className="propertyFeaturesCard__icon">
                                           {icon && <Image src={icon} alt={header} height={86} width={86} />}
                                        </div>
                                        <p className="propertyFeaturesCard__copy">{header}</p>
                                    </div>
                                </SwiperSlide>
                                
                            )
                        })}
                    </Swiper>
                </div>
            </div>

            <Lightbox isActive={galleryActive} items={galleryImages} />
        </section>
    )
}

export default PropertyFeatures;