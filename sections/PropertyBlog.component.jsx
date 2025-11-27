import {  Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ContentWrapper from "./ContentWrapper.component";
import BlogCard from '../components/BlogCard.component';
import SwiperControls from '../components/SwiperControls.component';

const PropertyBlog = ({ posts, v2 }) => {
    const classes = ['latestNews', 'themeSwiper'];
    v2 ? classes.push('sp-bottom') : classes.push('sp');

    return (
        <section id="latestNews" className={classes.join(' ')} data-aos="fade">
            <ContentWrapper size={v2 ? 'xl' : 'triblog'}>
            <div className="latestNews__content">
                    <h2 className="latestNews__header center themeHeader">Newsroom</h2>
                    <div className="latestNews__swiper--controls">
                        <SwiperControls swiperName="propertyBlog" orientation="horizontal" />
                    </div>
                </div>
            </ContentWrapper>

            <ContentWrapper size={v2 ? 'xl' : 'triblog'} mobileFullSwiper>
                <div className="latestNews__swiper copyPadding themeSwiper">
                    <div className="overlay"></div>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={{
                            prevEl: '.propertyBlogPrev',
                            nextEl: '.propertyBlogNext',
                        }}
                        pagination={{ clickable: true }}
                        spaceBetween={25}
                        slidesPerView="auto"
                        className="paginationMarginBottom"
                    >
                        {posts.map((post, i) => {
                            const { title, date, preview, slug, images } = post;

                            return (
                                <SwiperSlide key={i}>
                                    <BlogCard
                                        type="news"
                                        title={title}
                                        date={date}
                                        preview={preview}
                                        slug={slug}
                                        image={images.thumbnail}
                                        i={i}
                                    />
                                </SwiperSlide>
                            )
                        })}
                   </Swiper>
                </div>
            </ContentWrapper>
        </section>
    )
}

export default PropertyBlog;