import ContentWrapper from "../../../sections/ContentWrapper.component";
import { submitGAEvent } from "../../../utils/submitGAEvent";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const CareersJobListings = ({ jobs }) => {
    const JobListing = ({ content, i }) => {
      const { name, url, location } = content.attributes;

      return (
        <div className="careers__jobListings--item" data-aos="fade" data-aos-delay={(i + 1) * 50}>
          <h3>{name}</h3>
          <p>{location}</p>
          <a onClick={() => submitGAEvent('moved_to_breezyhr')}  href={url} rel="noreferrer" target="_blank" className="btn">Apply</a>
        </div>
      )
    }

    return (
      <section className="careers__jobListings sp">
        <ContentWrapper cssClass="careers__perks--wrapper" size="xl">
          <h2 data-aos="fade" data-aos-delay="">Our Openings</h2>

          <div className="contentWrapper careers__jobListings--content" data-size="xl" data-screen="desktop">
            {jobs.map((job, i) => (<JobListing key={i} content={job} i={i} />))}
          </div>

          <h3>Don&apos;t see a position that suits you? Send us your resume!</h3>
          <a onClick={() => submitGAEvent('email_resume_clicked')} href="mailto:careers@lepinecorp.com?subject=Resume" className="btn themeBtn">Click Here</a>

          {/* <div className="contentWrapper careers__jobListings--content" data-size="xl" data-screen="mobile">
            <Swiper
                slidesPerView="auto"
                centeredSlides={true}
                spaceBetween={25}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="paginationMargin"
            >
            {jobs.map((job, i) => {
                return (
                    <SwiperSlide key={i}>
                        <JobListing content={job} i={i} />
                    </SwiperSlide>
                )
                })}
            </Swiper>
          </div> */}
        </ContentWrapper>
      </section>
    )
  }

  export default CareersJobListings;