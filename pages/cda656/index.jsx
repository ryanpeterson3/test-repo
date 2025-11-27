import Head from 'next/head';
import PAHero from './components/PAHero.component';
import PAAbout from './components/PAAbout.component';
import PAPackages from './components/PAPackages.component';
import PAHowItWorks from './components/PAHowItWorks.component';
import PAVendors from './components/PAVendors.component';
import PAFlexibility from './components/PAFlexibility.component';
import PAWhiteGlove from './components/PAWhiteGlove.component';
import PAContact from './components/PAContact.component';

import AOS from 'aos';
import "aos/dist/aos.css";

import { useEffect, useState } from 'react';
import PAFooter from './components/PAFooter.component';
import PANav from './components/PANav.component';
import PAContactPopup from './components/PAContactPopup.component';
import PAIcon from './components/PAIcon.component';

const PremierAppliances = () => {
    const [initLoad, setInitLoad] = useState(false);
    const [navSticky, setNavSticky] = useState(false);
    const [contactPopupActive, setContactPopupActive] = useState(false);

    useEffect(() => {
      if (!initLoad) {
        const hero = document.querySelector('#hero').getBoundingClientRect();
        document.addEventListener('scroll', () => window.scrollY > hero.height + 50 ? setNavSticky(true) : setNavSticky(false));
  
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 0,
            duration: 300,
            disable: 'mobile'
        });

        setInitLoad(true);
      }
    }, []);

    useEffect(() => {
      const body = document.querySelector('body');
      contactPopupActive ? body.classList.add('noscroll') : body.classList.remove('noscroll');
    }, [contactPopupActive])

    return (
        <div className="container" data-brand="premierappliances">
            <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap" rel="stylesheet" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0,  maximum-scale=1,  user-scalable=0" />
            </Head>
            <PAIcon type="open" cb={setContactPopupActive} />            
            <PAHero />
            {/* <PAJobBanner /> */}
            <PANav isSticky={navSticky} />
            <PAAbout />
            {/* <PAVendorPackages /> */}
            <PAPackages />
            <PAHowItWorks />
            <PAVendors />
            <PAFlexibility />
            <PAWhiteGlove />
            <PAContact />
            <PAContactPopup isActive={contactPopupActive} cb={setContactPopupActive} />
            <PAFooter />


            {/* <PAVendorPackages /> */}

        </div>
    );
}


export async function getStaticProps() {
  return {
    props: {},
    revalidate: 1,
  }
}

export default PremierAppliances;