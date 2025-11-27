import ContentWrapper from "./ContentWrapper.component";

import { useState, useEffect } from 'react';

import {  Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperControls from '../components/SwiperControls.component';
import NewsroomCard from "../components/NewsroomCard.component";

const NewsroomContainer = ({ posts }) => {
    const [postsLoaded, setPostsLoaded] = useState(false);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [categoryFilters, setCategoryFilters] = useState([]);
    const [propertyFilters, setPropertyFilters] = useState([]);

    const [activeCategoryFilter, setActiveCategoryFilter] = useState(null);
    const [activePropertyFilter, setActivePropertyFilter] = useState(null);

    useEffect(() => {
        initContent();
    }, [posts]);

    useEffect(() => {
        filterPostsOnInput();
    }, [activeCategoryFilter]);
    useEffect(() => {
        filterPostsOnInput();
    }, [activePropertyFilter]);

    const filterPostsOnInput = () => {
        const filtered = [];

        posts.forEach(post => {
            let returnPost = true;
            
            if (activeCategoryFilter && !post.categories.includes(activeCategoryFilter)) {
                returnPost = false;
            }

            if (activePropertyFilter && !post.properties.includes(activePropertyFilter)) {
                return returnPost = false;
            }
           
            returnPost && filtered.push(post);
        });

        setFilteredPosts(filtered)
    }

    const initContent = async () => {
        await setFilteredPosts(posts);
        
        const categoryFilters = [];
        posts.forEach(post => {
            post.categories.forEach(cat => !categoryFilters.includes(cat) && categoryFilters.push(cat));
        });
        await setCategoryFilters(categoryFilters);

        const propertyFilters = [];
        posts.forEach(post => {
            post.properties.forEach(cat => !propertyFilters.includes(cat) && propertyFilters.push(cat));
        });
        await setPropertyFilters(propertyFilters);

        setPostsLoaded(true);
    }

    const resetFilters = () => {
        setFilteredPosts(posts);
        setActiveCategoryFilter(null);
        setActivePropertyFilter(null);
    }

    const onCategoryChange = (val) => val === '*' ? setActiveCategoryFilter(null) : setActiveCategoryFilter(val);
    const onPropertyChange = (val) => val === '*' ? setActivePropertyFilter(null) : setActivePropertyFilter(val);

    const noResults = <p className="newsroom__noResults">Sorry, there are no posts that match your search.</p>;

    const renderCards = () => {
        if(filteredPosts.length > 0) {
            return filteredPosts.map((post, i) => {
                return (
                    <NewsroomCard
                        key={Math.random()}
                        title={post.title}
                        date={post.date}
                        post={post}
                        slug={post.slug}
                    />
                )
            })
        } else {
            return noResults;
        }
    }

    const renderSlides = () => {
        if(filteredPosts.length > 0) {
            return filteredPosts.map((post, i) => {
                return (
                    <SwiperSlide key={Math.random()}>
                        <NewsroomCard
                            type="newsroom"
                            title={post.title}
                            date={post.date}
                            post={post}
                            slug={post.slug}
                        />
                    </SwiperSlide>
                )
            })
        } else {
            return noResults;
        }
    }

    const loadingContent = <p>Loading blog posts...</p>;
    const loadedContent = (
    <ContentWrapper cssClass="newsroom fadeIn">
        <div className="newsroom__filter">
            <div className="newsroom__filter--dropdowns">
                <select name="category" id="category" defaultValue="*" onChange={(e) => onCategoryChange(e.target.value)}>
                    <option disabled={!activeCategoryFilter} value="*">{activeCategoryFilter ? 'Show All' : 'Category'}</option>
                    {categoryFilters.map((item, i) => <option key={i} value={item}>{item}</option>)}
                </select>

                <select name="property" id="property" defaultValue="*" onChange={(e) => onPropertyChange(e.target.value)}>
                    <option disabled={!activePropertyFilter} value="*">{activePropertyFilter ? 'Show All' : 'Property'}</option>
                    {propertyFilters.map((item, i) => <option key={i} value={item}>{item}</option>)}
                </select>
            </div>

            <div className="newsroom__filter--reset" onClick={() => resetFilters()}>
                <span>RESET</span>
            </div>
        </div>

        <div className="newsroom__content" data-screen="desktop">
            {renderCards()}
        </div>

        <div className="newsroom__content" data-screen="mobile">
            <div className="newsroom__swiper">
                <div className="newsroom__swiper--controls" data-swiper="newsroom">
                    <SwiperControls swiperName="newsroom" orientation="horizontial" />
                </div>

                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        prevEl: '.newsroomPrev',
                        nextEl: '.newsroomNext'
                    }}
                    pagination={{ clickable: true }}
                    spaceBetween={25}
                    slidesPerView="auto"
                    className="paginationMargin"
            
                >
                    {renderSlides()}
                </Swiper>
            </div>
        </div>
    </ContentWrapper>)

    return postsLoaded ? loadedContent : loadingContent;
}

export default NewsroomContainer;