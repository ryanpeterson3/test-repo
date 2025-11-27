import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import ContentWrapper from "../../../sections/ContentWrapper.component";
import CornerFloatImage from "../CornerFloatImage/CornerFloatImage.component";
import ListingCardV2 from "./ListingCardV2.component";
import { ImageLoader } from '../../../utils/imageLoader';
import { useEffect, useState } from 'react';

const FeaturedListings = ({ personas, content, city, property, popupImage, pageId, listings, siblingProperties }) => {    
    const { registrationPortalId, registrationFormId, goalName, priceRange, disableListingsPricing, leasingPhoneNumber, contactCopy } = content;

    const PersonasContainer = ({ images }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            setInterval(() => {
                setCount(prev => (prev === images.length - 1 ? 0 : prev + 1));
            }, 5000);
        }, []);

        return (
            <div className="featuredListings__media">
                {images.map((img, i) => <div key={i} className="featuredListings__media--image" data-active={i === count ? 'true' : 'false'}>{ImageLoader(img, '', '', 500, 500, 0.5)}</div>)}
                {siblingProperties.length > 0 && <SiblingPropertyLink sibling={siblingProperties[0]} screen="desktop" />}
            </div>
        )
    }

    const SiblingPropertyLink = ({ sibling, screen }) => {
        const { name, pageId, image } = sibling;

        return (
            <Link href={`/property/${pageId}/#listings`} data-screen={screen} className="featuredListings__link">
                <div className="featuredListings__link--image">
                    {image && ImageLoader(image, '', '', 500, 500, 0.1)}
                </div>

                <div className="featuredListings__link--content">
                    <div className="featuredListings__link--copy">
                        <h4 className="featuredListings__link--header">Can&apos;t find what you&apos;re looking for?</h4>
                        <p>Visit our sister property next door&#44; {name}</p>
                    </div>

                    <div className="featuredListings__link--footer">
                        Visit {name}
                    </div>
                </div>
            </Link>
        );
    }

    const featuredListingsContent = () => (
        <section id="listings" className="featuredListings">
            <div className="featuredListings__desktop">
                <CornerFloatImage
                    image="https://lepine-storage.nyc3.digitaloceanspaces.com/97d021ad9cace909d7376614b9aacda1.jpg"
                    position="left"
                    width="425"
                    height="700"
                    aosDelay={100}
                />

                <CornerFloatImage
                    image="https://lepine-storage.nyc3.digitaloceanspaces.com/50625604697059b93f9ec4521800e129.jpg"
                    position="right"
                    width="425"
                    height="700"
                    aosDelay={100}
                />

                <ContentWrapper cssClass="featuredListings__container" size="xl">
                    <h2 className="featuredListings__header themeHeader">Featured Apartments</h2>
                    {priceRange && <h3 className="featuredListings__subtitle">{priceRange}</h3>}

                    <div className="featuredListings__cards" data-aos="fade">
                       {personas && personas.images.length > 0 && <PersonasContainer images={personas.images} />}

                        <ContentWrapper size="xl">
                            {listings.map((listing, i) => i <= 3 && (<ListingCardV2
                                cardIndex={i}
                                key={Math.random()}
                                city={city}
                                property={property}
                                content={listing}
                                popupImage={popupImage}
                                pageId={pageId}
                                registrationPortalId={type === 'commercial' ? null : registrationPortalId}
                                registrationFormId={type === 'commercial' ? null : registrationFormId}
                                goalName={goalName}
                                disableListingsPricing={disableListingsPricing}
                                leasingPhoneNumber={leasingPhoneNumber}
                            />))}
                        </ContentWrapper>
                </div>

                {contactCopy && <h3 className="featuredListings__contact">{contactCopy}</h3>}
                {contactCopy && <Link className="btn themeBtn" href="#contact">Contact Us</Link>}

                </ContentWrapper>
            </div>

            <div className="featuredListings__mobile themeSwiper" data-aos="fade">
                <div className="featuredListings__mobile--menu themeBGDark">
                    <div className="featuredListings__mobile--menu-wrapper">
                        <h2>Featured Apartments</h2>
                    </div>
                    {priceRange && <h3 className="featuredListings__subtitle">{priceRange}</h3>}
                </div>

                <Swiper
                    modules={[Pagination]}
                    pagination={{
                        clickable: true
                    }}
                    spaceBetween={25}
                    slidesPerView="auto"
                    className="paginationMargin"
                >
                    {listings.map((listing, i) => i <= 3 && (
                        <SwiperSlide key={i}
                        >
                            <ListingCardV2 
                                cardIndex={i}
                                city={city} 
                                property={property}
                                content={listing}
                                popupImage={popupImage}
                                pageId={pageId}
                                registrationPortalId={type === 'commercial' ? null : registrationPortalId}
                                registrationFormId={type === 'commercial' ? null : registrationFormId}
                                disableListingsPricing={disableListingsPricing}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {siblingProperties.length > 0 && <div className="featuredListings__link--mobileContainer"><SiblingPropertyLink sibling={siblingProperties[0]} screen="mobile" /></div>}
        </section>
    );

    if (listings.length > 0) {
        return featuredListingsContent();
    }
}

export default FeaturedListings;