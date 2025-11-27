import {  Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { useState } from 'react';

import packages from '../../../static/packages';

const PAPackages = () => {
    const [activePackage, setActivePackage] = useState(0);

    const renderTierBtns = (tier) => {
      return (packages.map((p, i) => {
        const classes = ['premierappliances__packages--btn'];
        i === activePackage && classes.push('active');

        if (p.tier === tier) {
          return (
            <button
              onClick={() => setActivePackage(i)}
              data-package-index={i}
              data-tier={p.tier}
              key={i}
              className={classes.join(' ')}>
                {p.name}
              </button>
          );
        }
      }))
    }
    

    return (
        <section className="premierappliances__packages" id="packages">
          <div className="pa-grid">
            <div className="premierappliances__packages--content">
              <h2 className="text-gold" data-aos="fade-right">Packages</h2>
            </div>

            {/* <div className="premierappliances__packages--btns">
              {packages.map((p, i) => {
                const classes = ['premierappliances__packages--btn'];
                i === activePackage && classes.push('active');

                return (
                  <button
                    onClick={() => setActivePackage(i)}
                    data-package-index={i}
                    data-package={`${p.tier}${p.number}`}
                    key={i}
                    className={classes.join(' ')}>
                      {p.tier} {p.number}
                    </button>
                )
              })}
            </div> */}

            <div className="premierappliances__packages--btns">
              <div className="premierappliances__packages--btnsWrapper">
                <h3>Silver</h3>
                {renderTierBtns('Silver')}
              </div>
              
              <div className="premierappliances__packages--btnsWrapper">
                <h3>Gold</h3>
                {renderTierBtns('Gold')}
              </div>

              <div className="premierappliances__packages--btnsWrapper">
                <h3>Platinum</h3>
                {renderTierBtns('Platinum')}
              </div>
            </div>
          </div>

          {packages.map((p, i) => {
            const { number, name, tier, items } = p;
            const classes = ['premierappliances__swiper'];
            i === activePackage && classes.push('active');

            return (
              <div className={classes.join(' ')} key={i}>
                <Swiper
                  slidesPerView="auto"
                  modules={[Navigation, Autoplay]}
                  loop={name === 'Standalone Upgrades' ? false : true}
                  centeredSlides={name === 'Standalone Upgrades' ? false : true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: true
                  }}
                  navigation
                  spaceBetween={25}
                  data-swiper={`${tier}${number}`}
                >
                  {items.map((a, i) => (
                      <SwiperSlide key={i} style={{ width: '100%' }}>
                        <div className="premierappliances__package">
                          <div className="premierappliances__package--image">
                            <Image src={a.image} height={500} width={500} alt={a.modelNumber} />
                          </div>

                          <div className="premierappliances__package--description">
                            <p className="text-bold">{a.modelNumber}</p>
                            <p>{a.description}</p>
                            {a.pdf && <a href={a.pdf} target="_blank" rel="noreferrer" className="premierappliances__package--btn">View Specs</a>}
                          </div>
                        </div>
                      </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            );
          })}
      </section>
    )
}

export default PAPackages;