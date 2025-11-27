import { useState, useEffect } from "react";
import Map from "../components/Map.component";
import MapMarker from "../components/MapMarker.component";
import PropertyMapBtn from "../components/PropertyMapBtn.component";
import { baseUrl } from "../utils/baseUrl";
import mapCategories from "../utils/mapCategories";
import ContentWrapper from "./ContentWrapper.component";

import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import PropertyMapCard from "../components/PropertyMapCard.component";

const PropertyMap = ({ logo, pageId, city, zoom, coords, items }) => {
    const defaultCategory = 'restaurants';
    const [currentCategory, setCurrentCategory] = useState(defaultCategory);
    const [currentMapItems, setCurrentMapItems] = useState([]);
    const [activeMarkerIndex, setActiveMarkerIndex] = useState(0);

    const renderMap = (id) => {
        if (items.length > 0) {
            let currentItems =  items.filter((category) => category.category === currentCategory)[0].mapItems.sort((a, b) => a.walkTime < b.walkTime);
            setCurrentCategory(id);
            setCurrentMapItems(currentItems);
            setActiveMarkerIndex(null);    
        } else {
            setCurrentMapItems([]);
        }
        
    }

    useEffect(() => {
        renderMap(currentCategory);
    }, [currentCategory]);

    useEffect(() => {
        setCurrentCategory(defaultCategory);
        renderMap(currentCategory);
    }, [pageId]);

    const propertyMapId = pageId === '40mcgill' ? 'thecristina' : pageId;

    return (
        <section id="propertyMap" className="propertyMap">
            <div className="propertyMap__legend themeBGDark" data-aos="fade">
                <div className="propertyMap__header">
                    <h2>Live In {city}</h2>
                </div>

                <ContentWrapper cssClass="propertyMap__categories" size="xl">
                    {mapCategories.map((cat, i) => {
                        const { id, label } = cat;
                        const isActive = id === currentCategory;

                        return items[i].mapItems && <PropertyMapBtn key={i} id={id} label={label} isActive={isActive} cb={renderMap} />

                    })}
                </ContentWrapper>
            </div>

                {items.map((category, i) => {
                    const classes = ['propertyMap__category--wrapper'];
                    category.category === currentCategory && classes.push('active');

                    const { mapItems } = category;

                    return (<div key={i} className={classes.join(' ')} >
                        <ContentWrapper cssClass="propertyMap__items">
                            <div className="propertyMap__category">
                                {mapItems && mapItems.map((item, i) => {
                                    return (<div key={i} className="propertyMap__item" onClick={() => setActiveMarkerIndex(i)}>
                                        <div className="propertyMap__item--icon themeBGDark">{i + 1}</div>
                                        <p>{item.title}</p>
                                    </div>)
                                })}
                            </div>
                        </ContentWrapper>
                    </div>)
                })}

            <div className="propertyMap__wrapper" data-aos="fade">
                <Map zoom={zoom} coords={coords}>
                    <MapMarker
                        coords={coords}
                        type="propertyLogo"
                        logo={logo}
                    />
                    {currentMapItems !== [] && currentMapItems.map((item, i) => {
                        const { title } = item;
                        // const imageUrl = baseUrl(item.image.data.attributes.url);
                        const imageUrl = `https://lepine-storage.nyc3.cdn.digitaloceanspaces.com/assets/${propertyMapId}/map/${item.url}`;
                        const coords = { lat: parseFloat(item.lat), lng: parseFloat(item.lng) };
                        const etas = { driveTime: item.driveTime, walkTime: item.walkTime, bikeTime: item.bikeTime };

                        return (
                            <MapMarker
                                pageId={propertyMapId}
                                title={title}
                                key={i}
                                coords={coords}
                                type="amenity"
                                city={city}
                                image={imageUrl}
                                etas={etas}
                                index={i}
                                isActive={i === activeMarkerIndex}
                                setActive={setActiveMarkerIndex}
                            />)
                    })}
                </Map>
            </div>

            <div className="propertyMap__swiper themeSwiper">
            <Swiper
                    modules={[Pagination]}
                    pagination={{
                        clickable: true
                    }}
                    spaceBetween={25}
                    slidesPerView="auto"
                    className="paginationMargin"
                >
                       {currentMapItems !== [] && currentMapItems.map((item, i) => {
                            const { title } = item;
                            // const image = baseUrl(item.image.data.attributes.url);
                            const imageUrl = `https://lepine-storage.nyc3.cdn.digitaloceanspaces.com/assets/${propertyMapId}/map/${item.url}`;
                            const coords = { lat: item.lat, lng: item.lng };
                            const etas = { driveTime: item.driveTime, walkTime: item.walkTime, bikeTime: item.bikeTime };

                            return (
                                <SwiperSlide key={i}>
                                    <PropertyMapCard type="mobile" title={title} image={imageUrl} coords={coords} etas={etas} city={city} />
                                </SwiperSlide>
                            )
                        })}
                </Swiper>
             
            </div>
        </section>
    )
}

export default PropertyMap;