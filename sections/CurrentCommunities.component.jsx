import { useState, useEffect } from "react";
import Link from "next/link";
import { Fragment } from "react";

import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

import SwiperVertical from "../components/SwiperVertical.component";

import ContentWrapper from "./ContentWrapper.component";
import Map from "../components/Map.component";
import InfoCard from '../components/InfoCard.component';
import MapMarker from '../components/MapMarker.component';
import SwiperControls from "../components/SwiperControls.component";

import MapMarkerIcon from '../assets/images/mapMarkerLepine.png';

const CurrentCommunities = ({ header, communities, selectedCommunitiesIndex }) => {
    const [currentCommunityIndex, setCurrentCommunityIndex] = useState(0);

    const parseCoord = (coord) => parseFloat(coord);

    const initCoords = {
        lat: communities[0].properties.length > 0 ? parseCoord(communities[0].properties[0].coords.lat) : parseCoord(communities[0].coords.lat),
        lng: communities[0].properties.length > 0 ? parseCoord(communities[0].properties[0].coords.lng) : parseCoord(communities[0].coords.lng),
    }

    const fetchCoords = async () => {
        const coords = {
            lat: communities[currentCommunityIndex].properties.length > 0 ? parseCoord(communities[currentCommunityIndex].properties[0].coords.lat) : parseCoord(communities[currentCommunityIndex].coords.lat),
            lng: communities[currentCommunityIndex].properties.length > 0 ? parseCoord(communities[currentCommunityIndex].properties[0].coords.lng) : parseCoord(communities[currentCommunityIndex].coords.lng),
        }

        setCenter(coords);
    }

    const [center, setCenter] = useState(initCoords);

    useEffect(() => {
        fetchCoords();
    }, [currentCommunityIndex]);

    useEffect(() => {
        assignIndex();
    }, [selectedCommunitiesIndex]);

    const assignIndex = () => {
       if (selectedCommunitiesIndex) {
        const index = selectedCommunitiesIndex;
        setCurrentCommunityIndex(index);
        fetchCoords();
       }
    }

    return (
        <Fragment>
            {header && <section className="currentCommunities sp">
                <ContentWrapper size="lg">
                    <h2 style={{ marginBottom: '0px', textAlign: 'center' }}>
                        {header}
                    </h2>
                </ContentWrapper>
            </section>}

            <section className="currentCommunities__map--wrapper" id="map">
                <div className="currentCommunities__swiper">
                    <ContentWrapper size="lg">
                        <div className="currentCommunities__swiper--wrapper" data-direction="row-reverse">
                            <div className="currentCommunities__swiper">
                                <SwiperVertical
                                    prev='.communitiesPrev'
                                    next='.communitiesNext'
                                    height={550}
                                    loop
                                    centeredSlides={true}
                                    currentContentIndex={currentCommunityIndex}
                                    setCurrentContentIndex={setCurrentCommunityIndex}
                                    breakpoints={{
                                        1400: {
                                            height: 800,
                                        }
                                    }}
                                >
                                    {communities.map((c, i) => {
                                        const { name, description, properties } = c;
                                        return (
                                            <SwiperSlide key={i} index={i}>
                                                <InfoCard
                                                    type="community"
                                                    title={name}
                                                    preview={description}
                                                    properties={properties}
                                                    i={i}
                                                />
                                            </SwiperSlide>
                                        )
                                    })}
                                </SwiperVertical>
                            </div>

                            <div className="currentCommunities__swiper--controls">
                                <SwiperControls swiperName="communities" orientation="vertical" />
                            </div>
                        </div>
                    </ContentWrapper>
                </div>

                <div className="map__overlay"></div>

                <Map coords={center} zoom={18}>
                        {communities[currentCommunityIndex].properties.length > 0 && communities[currentCommunityIndex].properties.map((property, i) => {
                            return <MapMarker icon={MapMarkerIcon} key={i} type="community" coords={property.coords} pageId={property.pageId} image={property.marker} />
                        })}
                </Map>
            </section>
        </Fragment>
    )
};

export default CurrentCommunities;