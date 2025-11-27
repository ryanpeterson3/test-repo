import { useEffect, useState } from 'react';
import Image from 'next/image';
import NavV3ExternalLinks from './NavV3ExternalLinks.component';
import ContentWrapper from '../../../sections/ContentWrapper.component';
import { useRouter } from 'next/router';

import LepineLogoLight from '../../../assets/svg/lepineLight.svg';

import Scrollspy from 'react-scrollspy';

const NavSecondaryV3 = ({ logo, phoneNumber, phoneHref, blogPosts, propertyNav }) => {
    const [navSecondaryIsSticky, setNavSecondaryIsSticky] = useState(false);
    const classes = ['navSecondaryV3'];
    navSecondaryIsSticky && classes.push('sticky');

    const router = useRouter();

    useEffect(() => {
        setNavSecondaryIsSticky(false);
    }, [router.pathname]);

    useEffect(() => {
        if (propertyNav) {
            const navSecondary = document.querySelector('.navSecondaryV3').getBoundingClientRect().top;

            window.addEventListener('scroll', () => {
                if (window.scrollY < 675) {
                    setNavSecondaryIsSticky(false)
                } else {
                    navSecondary < window.scrollY ? setNavSecondaryIsSticky(true) : setNavSecondaryIsSticky(false);
                }
            });
        }
    }, []);

    const renderBlogLink = () => {
        if (blogPosts && blogPosts > 0) {
            return (
                <div className="navSecondaryV3__item">
                    <a href="#newsroom">Blog</a>
                </div>
            )
        }
    }

    const renderPropertyPageItems = () => {
        return (
            <Scrollspy className="navSecondaryV3__links" offset={270} items={['listings', 'propertyFeatures', 'propertyMap', 'faq', 'newsroom', 'contact']} currentClassName="active">
                <div className="navSecondaryV3__item">
                    <a href="#listings">The Suites</a>
                </div>

                <div className="navSecondaryV3__item">
                    <a href="#propertyFeatures">Amenities</a>
                </div>

                <div className="navSecondaryV3__item">
                    <a href="#propertyMap">Neighbourhood</a>
                </div>

                <div className="navSecondaryV3__item">
                    <a href="#faq">FAQs</a>
                </div>

                {/* {renderBlogLink()} */}

                <div className="navSecondaryV3__item">
                    <a href="#contact">Contact</a>
                </div>
            </Scrollspy>
        )
    }

    return (
            <section className={classes.join(' ')}>
                <div className="navSecondaryV3__wrapper themeBGLight">
                    <ContentWrapper cssClass="navSecondaryV3__content" size="lg">
                        {logo ? (<a href="#top" className="navSecondaryV3__logo">
                            <Image src={logo} alt="" height={65} width={282} />
                        </a>) : (<a href="#top" className="navSecondaryV3__logo">
                            <Image src={LepineLogoLight} alt="" height={65} width={282} />
                        </a>)}

                        {propertyNav && renderPropertyPageItems()}

                        <div className="navSecondaryV3__externalLinks">
                            {propertyNav ? (<NavV3ExternalLinks phone phoneHref={phoneHref} phoneNumber={phoneNumber} whiteIcon tenantPortal />) : (<NavV3ExternalLinks phone phoneHref={phoneHref} phoneNumber={phoneNumber} whiteIcon tenantPortal />)}
                        </div>
                    </ContentWrapper>
                </div>
            </section>
    )
}

export default NavSecondaryV3;