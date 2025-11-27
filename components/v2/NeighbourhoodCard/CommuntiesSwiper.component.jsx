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
import Link from "next/link";
import Image from "next/image";

const CommunitiesSwiper = ({ header, copy, items, sp, gridRows, neighbourhoods }) => {
    const classes = ['communitiesSwiper', 'sp'];

    let groups = [
        [
            { city: 'Kanata', items: [] },
        ],
        [
            { city: 'Carleton Place', items: [] },
        ],
        [
            { city: 'Smiths Falls', items: [] },
        ],
        [
            { city: 'Renfrew', items: [] },
            { city: 'Barrhaven', items: [] },
        ],
        [
            { city: 'Orleans', items: [] },
            { city: 'Stittsville', items: [] },
        ],
    ];

    groups.forEach(g => {
        g.forEach(s => {
            const i = neighbourhoods.filter(n => n.city === s.city);
            s.items = i;
        });
    })

    return (
        <>
            <div className="communitiesSwiper__bg">
                <section className={classes.join(' ')}>
                    <ContentWrapper size="xl" cssClass="communitiesSwiper__copy">                
                        <div className="communitiesSwiper__header" dangerouslySetInnerHTML={{ __html: renderRichText(header) }} />
                        <p className="communitiesSwiper__copy">{copy}</p>
                    </ContentWrapper>

                    <div className="communitiesSwiper__content">
                        <Swiper
                            slidesPerView="auto"
                            spaceBetween={25}
                            loop={true}
                            centeredSlides={true}
                            navigation={{
                                nextEl: 'communitiesSwiper__next',
                                prevEl: 'communitiesSwiper__prev'
                            }}
                            pagination={{ 
                                clickable: true,
                                // el: 'communitiesSwiper__pagination'
                            }}
                            modules={[Pagination, Navigation]}
                            className="paginationMargin"
                        >
                            {/* {n.map((n, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <Link key={i} className="communitiesSwiper__community" href={c.href} data-theme={c.theme}>
                                            <div className="communitiesSwiper__community--col" data-type="image">
                                                <Image src={c.image} height={200} width={200} />
                                            </div>

                                            <div className="communitiesSwiper__community--col" data-type="copy">
                                                <p>{c.name}</p>
                                                {c.href.includes('comingsoon') && <p className="communitiesSwiper__community--cs">Coming Soon</p>}
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })} */}

                            {
                                groups.map((g, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <div className="communitiesSwiper__item">
                                                {g.map((s, i) => (
                                                    <div className="communitiesSwiper__group" key={i}>
                                                        <h4>{s.city}</h4>
                                                        {s.items.map(n => (
                                                            <Link key={i} className="communitiesSwiper__community" href={n.href} data-theme={n.theme}>
                                                                <div className="communitiesSwiper__community--col" data-type="image">
                                                                    <Image src={n.image} height={200} width={200} />
                                                                </div>

                                                                <div className="communitiesSwiper__community--col" data-type="copy">
                                                                    <p>{n.name}</p>
                                                                    {n.href.includes('comingsoon') && <p className="communitiesSwiper__community--cs">Coming Soon</p>}
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>

                        <div className="communitiesSwiper__btm">
                            <div className="communitiesSwiper__prev"></div>
                            <div className="communitiesSwiper__pagination"></div>
                            <div className="communitiesSwiper__next"></div>
                        </div>
                    </div>
                </section>
            </div>

            <br />

            <div className="communitiesSwiper__bg">
                <section className={classes.join(' ')}>
                    <ContentWrapper size="xl" cssClass="communitiesSwiper__copy">                
                        <div className="communitiesSwiper__header" dangerouslySetInnerHTML={{ __html: renderRichText(header) }} />
                        <p className="communitiesSwiper__copy">{copy}</p>
                    </ContentWrapper>

                    <div className="communitiesSwiper__content">
                        <Swiper
                            slidesPerView="auto"
                            spaceBetween={25}
                            loop={true}
                            centeredSlides={true}
                            navigation={{
                                nextEl: 'communitiesSwiper__next',
                                prevEl: 'communitiesSwiper__prev'
                            }}
                            pagination={{ 
                                clickable: true,
                                // el: 'communitiesSwiper__pagination'
                            }}
                            modules={[Pagination, Navigation]}
                            className="paginationMargin"
                        >
                            {neighbourhoods.map((n, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <a className="communitiesSwiper__card" href={n.href} data-theme={n.theme}>
                                            <div className="communitiesSwiper__card--image">
                                                <Image src={n.image} height={500} width={500} />
                                                <div className="communitiesSwiper__card--imageOverlay themeBGDark">
                                                    {n.svg ? <Image src={n.svg} height={300} width={300} /> : <h3>Coming<br />Soon</h3>}
                                                </div>
                                            </div>

                                            <div className="communitiesSwiper__card--content">
                                                <h3>{n.name}</h3>
                                                <h4>{n.city}</h4>
                                                {n.href.includes('comingsoon') && <p>Coming Soon</p>}
                                            </div>
                                        </a>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>

                        <div className="communitiesSwiper__btm">
                            <div className="communitiesSwiper__prev"></div>
                            <div className="communitiesSwiper__pagination"></div>
                            <div className="communitiesSwiper__next"></div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default CommunitiesSwiper;