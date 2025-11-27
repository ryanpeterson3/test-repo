import ContentWrapper from "../../../sections/ContentWrapper.component";
import { renderRichText } from "../../../utils/renderRichText";
import NeighbourhoodCard from "./NeighbourhoodCard.component";

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation, Pagination, Grid } from 'swiper';

import { neighbourhoodsStatic } from "./neighbourhoodsStatic";

import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperControls from "../../SwiperControls.component";

const NeighbourhoodCardsContainer = ({ header, copy, items, sp, gridRows, neighbourhoods, isNewsroom }) => {
    const [swiperOverlayDirection, setSwiperOverlayDirection] = useState('right');

    const classes = ['neighbourhoodCards'];
    sp && classes.push(sp);

    const swiperOverlayClasses = ['neighbourhoodSwiper__overlay', swiperOverlayDirection];

    const handleSwiperChange = (s) => {
        s.isBeginning ? setSwiperOverlayDirection('right') : setSwiperOverlayDirection('left');
    }

    const neighbourhoodsContent = neighbourhoods ? neighbourhoods : neighbourhoodsStatic;

    return (
        <section id="neighbourhoods" className={classes.join(' ')}>
            <ContentWrapper cssClass="neighbourhoodCards__container" size="xl">
                <div className="neighbourhoodCards__content" data-content="copy">
                    {header ? (<div className="neighbourhoodCards__content--col" dangerouslySetInnerHTML={{ __html: renderRichText(header) }} data-col="header" />) : (<div className="neighbourhoodCards__content--col"><h2>Neighbourhoods You Love</h2></div>)}

                    <div className="neighbourhoodCards__content--col" data-col="copy">
                        <p className="neighbourhoodCards__copy">{copy}</p>
                       <div className="neighbourhoodSwiper__controls">
                        <SwiperControls swiperName="neighbourhoodSwiper" orientation="horizontial" />
                       </div>
                    </div>
                </div>
            </ContentWrapper>

            <ContentWrapper cssClass="neighbourhoodCards__swiper" data-screen="desktop">
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={25}
                    centeredSlides={isNewsroom}
                    grid={{rows: gridRows, fill: "column"}}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Navigation, Grid]}
                    className={`neighbourhoodSwiper paginationMargin gridRows${gridRows}`}
                    navigation={{
                        prevEl: '.neighbourhoodSwiperPrev',
                        nextEl: '.neighbourhoodSwiperNext'
                    }}
                    breakpoints={{
                        1024: {
                            centeredSlides: false
                        }
                    }}
                    onSlideChange={(swiper) => handleSwiperChange(swiper)}
                >
                    {neighbourhoodsContent.map((n, i) =>  <SwiperSlide key={i}>
                        <NeighbourhoodCard name={n.name} city={n.city} href={n.href} image={n.image} theme={n.theme} svg={n.svg} i={i} />
                    </SwiperSlide>)}
                  <div className={swiperOverlayClasses.join(' ')}></div>
                </Swiper>
            </ContentWrapper>
        </section>
    );
}

export default NeighbourhoodCardsContainer;