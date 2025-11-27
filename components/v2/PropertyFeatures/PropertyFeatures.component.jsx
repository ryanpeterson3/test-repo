import Image from "next/image";
import { baseUrl } from "../../../utils/baseUrl";
import ContentWrapper from "../../../sections/ContentWrapper.component";

import {  Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HeroArrow from '../../../assets/svg/heroArrow.svg';
import { ImageLoader } from "../../../utils/imageLoader";
import PropertyFeatureSVG from "../PropertyFeatureSVG/PropertyFeatureSVG.component";
import { submitGAEvent } from "../../../utils/submitGAEvent";

const PropertyFeaturesV2 = ({ features, copy, amenities }) => {
    let pdf = features.pdf.data ? baseUrl(features.pdf.data.attributes.url) : null;
    if (!pdf.includes('http')) pdf = `https://${pdf}`;

    const PropertyFeaturesCard = ({ amenity, i }) => {
            const defaultAmenityImage = amenity.cardImage ? baseUrl(amenity.cardImage) : null;
            const propertySpecificAmenityImage = amenity.image ? baseUrl(amenity.image) : null;
            const header = amenity.header;
            const copy = amenity.copy;

            let image = null;
            
            if (propertySpecificAmenityImage) {
                image = propertySpecificAmenityImage;
            } else {
                if (defaultAmenityImage) {
                    image = defaultAmenityImage;
                }
            }

            return (
                <div key={i} className="propertyFeaturesV2Card">
                <div className="propertyFeaturesV2Card__image">
                    {image && ImageLoader(image, '', header, 400, 400, 0.1)}
                </div>

                <div className="propertyFeaturesV2Card__content">
                    <div className="propertyFeaturesV2Card__header">
                        {header && <div className="propertyFeaturesV2Card__icon">
                            <PropertyFeatureSVG name={header} />
                        </div>}
                        {/* <div className="propertyFeaturesV2Card__icon">{icon && ImageLoader(icon, '', '', 80, 80, 0.1)}</div> */}
                        <h3 className="themeHeader">{header}</h3>
                    </div>

                    <p>{copy}</p>
                </div>
            </div>
            )
        }

    return (
        <section id="propertyFeatures" className="propertyFeaturesV2 sp">
                <Image className="propertyFeaturesV2__arrow" src={HeroArrow} alt="" height={1000} width={1000} />

                <div className="propertyFeaturesV2__container" data-aos="fade">
                <ContentWrapper size="xl">
                    <div className="propertyFeaturesV2__content">
                        <div className="propertyFeaturesV2__header">
                            <h2 className="themeHeader">Property<br/>Features</h2>
                        </div>

                        <div className="propertyFeaturesV2__copy">
                            <p>{copy}</p>
                            {pdf && <a href={pdf} target="_blank" rel="noreferrer" className="btn themeBtn" onClick={() => submitGAEvent('download_property_amenity_map')}>View Property Amenity Map</a>}
                        </div>
                    </div>

                    <div className="propertyFeaturesV2__cards">
                        {amenities.map((amenity, i) => (<PropertyFeaturesCard key={i} amenity={amenity} i={i} />))}
                    </div>
                </ContentWrapper>

                <div className="propertyFeaturesV2__swiper">
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
                        className="paginationMarginBottom"
                    >
                        {amenities.map((amenity, i) => (<SwiperSlide key={i}><PropertyFeaturesCard amenity={amenity} i={i} /></SwiperSlide>))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default PropertyFeaturesV2;