import { useState, useEffect } from "react";

import { initFilters, dropdowns, checkboxes } from "../../../utils/initListingsFilter";
import ListingCard from "../../../components/ListingCard.component";

import { useRouter } from 'next/router';

import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ContentWrapper from "../../../sections/ContentWrapper.component";
import CornerFloatImage from "../CornerFloatImage/CornerFloatImage.component";


const PropertyListingsV2 = ({ phase, content, listings, city, property, popupImage, pageId }) => {    
    const { registrationPortalId, registrationFormId, goalName, bookAppointmentURL, priceRange, noListingsCTA, disableListingsPricing, leasingPhoneNumber } = content;

    const [filters, setFilters] = useState(initFilters);
    const [activeListings, setActiveListings] = useState([]);

    useEffect(() => {
        filterActiveUnits();
    }, []);

    useEffect(() => {
        filterActiveUnits();
    }, [listings]);

    useEffect(() => {
        filterActiveUnits();
    }, [filters]);

    const filterActiveUnits = () => {
        let active = listings;

        dropdowns.forEach(dropdown => {
            const { id } = dropdown;

            if (filters[id] !== undefined) {
                active = active.filter(unit => {
                    if (unit[id].toString() === filters[id].toString()) return unit;
                })
            }
        });

        checkboxes.forEach(chk => {
            const { id } = chk;
            
            if (filters[id] === true) {
                active = active.filter(unit => {
                    if (unit[id] === filters[id]) return unit;
                })
            }
        })

        setActiveListings(active);
    }

    const toggleFilter = (e, type, id) => {
        let value;

        if (type === 'checkbox') {
            value = !filters[id]
        } else if (type === 'dropdown') {
            value = e.target.value === 'undefined' ? undefined : e.target.value;  
        }

        setFilters(prevState => {
            return {
                ...prevState,
                [id]: value
            }
        });
    }

    const resetFilters = () => {
        setFilters(initFilters);
    }

    const renderDropdown = (id, label, options) => (
        <div key={id} className="propertyListingsV2__dropdown">
            <select name={id} id={id} defaultValue="undefined" onChange={(e) => toggleFilter(e, 'dropdown', id)}>
                {filters[id] === undefined ? <option disabled value="undefined">{label}</option> : <option value="undefined">Show All</option>}
                {options.map((opt, i) => <option key={i} value={opt.value}>{opt.label}</option>)}
            </select>
        </div>
    );

    const renderCheckbox = (id, label) => {
        const classes = filters[id] ? ['propertyListingsV2__checkbox--icon', 'active'] : ['propertyListingsV2__checkbox--icon']

        return (
            <div className="propertyListingsV2__checkbox" key={id}>
                <div className={classes.join(' ')}></div>
                <input type="checkbox" name={id} value={id} onInput={(e) => toggleFilter(e, 'checkbox', id)} />
                <span>{label}</span>
            </div>
        )
    }

    const renderFilterUI = () => {
        return (
            <div className="propertyListingsV2__options themeBGLight">
                <div className="propertyListingsV2__dropdown--container">
                    {dropdowns.map(dropdown => {
                        const { id, label, options } = dropdown;
                        return renderDropdown(id, label, options)
                    })}
                </div>

                <div className="propertyListingsV2__checkbox--container">
                    {checkboxes.map(chk => {
                        const { id, label } = chk;
                        return renderCheckbox(id, label)
                    })}
                </div>

                <div className="propertyListingsV2__reset themeBGDark__hover" onClick={() => resetFilters()}>
                    <h3>Reset</h3>
                </div>
            </div>
        );
    }

    const renderCurrentFilters = () => {
        {dropdowns.map(dropdown => {
            if (filters[dropdown.id] !== undefined) {
                return <p key={dropdown.id}>{dropdown.id}</p>
            }
        })}
        
        {checkboxes.map(checkbox => {
            if (filters[checkbox.id]) {
                return <p key={checkbox.id}>{checkbox.id}</p>
            }
        })}
    }

    const listingsMenuClasses = ['propertyListingsV2__menu'];
    listings.length >= 8 && listingsMenuClasses.push('active');

    const noResults = () => (<p className="propertyListingsV2__noResults">Sorry, there are no results that match your criteria.</p>);

    return (
        <section id="listings" className="propertyListingsV2">
            <div className="propertyListingsV2__desktop">
                <CornerFloatImage
                    image="https://lepine-storage.nyc3.digitaloceanspaces.com/97d021ad9cace909d7376614b9aacda1.jpg"
                    position="left"
                    width="600"
                    height="1000"
                />
                <CornerFloatImage
                    image="https://lepine-storage.nyc3.digitaloceanspaces.com/50625604697059b93f9ec4521800e129.jpg"
                    position="right"
                    width="600"
                    height="1000"
                />
                <ContentWrapper cssClass="propertyListingsV2__container" size="xl" data-aos="fade">
                    <h2 className="propertyListingsV2__header themeHeader">Featured Apartments</h2>
                    {priceRange && <h3 className="propertyListingsV2__subtitle">{priceRange}</h3>}

                    <div className={listingsMenuClasses.join(' ')}>
                        {renderFilterUI()}
                    </div>

                    <div className="propertyListingsV2__cards">
                        <ContentWrapper size="xl">
                        {activeListings.length > 0 ? (activeListings.map((listing, i) => (
                                <ListingCard 
                                    key={Math.random()}
                                    city={city}
                                    property={property}
                                    content={listing}
                                    popupImage={popupImage}
                                    pageId={pageId}
                                    registrationPortalId={registrationPortalId}
                                    registrationFormId={registrationFormId}
                                    bookAppointmentURL={bookAppointmentURL}
                                    goalName={goalName}
                                    disableListingsPricing={disableListingsPricing}
                                    leasingPhoneNumber={leasingPhoneNumber}
                                />))) : noResults()}
                      
                        </ContentWrapper>
                </div>
                </ContentWrapper>
            </div>

            <div className="propertyListingsV2__mobile themeSwiper">
                <div className="propertyListingsV2__mobile--menu themeBGDark">
                    <div className="propertyListingsV2__mobile--menu-wrapper">
                        <h2>Featured Apartments</h2>
                        {/* <Image src={SearchIcon} alt="" width={25} height={25} /> */}
                    </div>
                    {priceRange && <h3 className="propertyListingsV2__subtitle">{priceRange}</h3>}
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
                    {activeListings.map((listing, i) => (
                        <SwiperSlide key={i}
                        >
                            <ListingCard 
                                city={city} 
                                property={property}
                                content={listing}
                                popupImage={popupImage}
                                pageId={pageId}
                                registrationPortalId={registrationPortalId}
                                registrationFormId={registrationFormId}
                                bookAppointmentURL={bookAppointmentURL}
                                disableListingsPricing={disableListingsPricing}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default PropertyListingsV2;