import { useState, useEffect } from 'react';
import LogoDark from '../assets/svg/lepine.svg';
import MenuClose from '../assets/svg/menuClose.svg';
import MenuOpen from '../assets/svg/menuOpen.svg';
import Image from 'next/image';
import Link from 'next/link';
import NavExternalLinks from './NavExternalLinks.component';

import { pageIsActive } from '../utils/pageIsActive'; 
import { navItems } from '../utils/navItems';
import ContactInfoBar from './ContactInfoBar.component';
import AppPopup from './AppPopup.component';
import tenantServices from '../static/global/tenantServices.json'

const Nav = ({ current, phoneNumber, pageId, phoneHref, contact }) => {
    const { address, postalCode, phone, email, hours, corporatePhone } = contact.info;

    const [navSecondaryActive, setNavSecondaryActive] = useState(false);
    const [navContactActive, setNavContactActive] = useState(false);
    const [navCommunitiesActive, setNavCommunitiesActive] = useState(false);
    const [navTertiaryActive, setNavTertiaryActive] = useState(false);
    const [noScroll, setNoScroll] = useState(false);
    
    const [activeCommunity, setActiveCommunity] = useState('');

    const navSecondaryClasses = ['nav__secondary'];
    const navTertiaryClasses = ['nav__tertiary'];
    const navContactClasses = ['nav__contact', 'themeBGLight'];

    const [navMobileLocationsActive, setNavMobileLocationsActive] = useState(false);

    const navItemsClasses = {
        communities: ['nav__item'],
        careers: ['nav__item'],
        about: ['nav__item', 'themeNavItem__hover'],
        newsroom: ['nav__item', 'themeNavItem__hover'],
        contact: ['nav__item', 'themeNavItem__hover']
    }


    navCommunitiesActive && navItemsClasses.communities.push('active');
    current === 'communities' && navItemsClasses.communities.push('themeNavItem');
    current === 'communities' && navItemsClasses.communities.push('active');
    current === 'about' && navItemsClasses.about.push('active');
    current === 'newsroom' && navItemsClasses.newsroom.push('active');

    navSecondaryActive && navSecondaryClasses.push('active');
    navTertiaryActive && navTertiaryClasses.push('active');
    navContactActive && navContactClasses.push('active');

    const toggleSecondaryNav = () => {
        setNavContactActive(false);

        if (navTertiaryActive) {
            setNavTertiaryActive(false);
            setActiveCommunity('');

            setTimeout(() => {
                setNavSecondaryActive(!navSecondaryActive);
                setNavCommunitiesActive(!navCommunitiesActive);
                setNavMobileLocationsActive(true);
            }, 100);
        } else {
            setNavCommunitiesActive(!navCommunitiesActive);
            setNavSecondaryActive(!navSecondaryActive);
            setNavMobileLocationsActive(false);
        }
    }

    const toggleNavContact = () => {
        setTimeout(() => {
            setNavSecondaryActive(false);
            setNavTertiaryActive(false);
            setActiveCommunity('');
            setNavCommunitiesActive(false);
            setNavMobileLocationsActive(false);
            setNavContactActive(!navContactActive);
        }, 100)
    }

    const toggleTertiaryNav = (location) => {
        if (location === activeCommunity) {
            setActiveCommunity('');
            setTimeout(() => setNavTertiaryActive(false), 100)
        } else {
            setActiveCommunity(location);
            setTimeout(() => setNavTertiaryActive(true), 100)
        }
    };

    const collapseNav = () => {
        setNavSecondaryActive(false);
        setNavCommunitiesActive(false);
        setNavTertiaryActive(false);
        setNavMobileLocationsActive(false);
    }

    useEffect(() => {
        setNoScroll(false);
        collapseNav();
    }, [pageId])

    const renderSecondaryNav = () => {
        return (
                <div className="nav__locations" data-nav="desktop">
                    {navItems.map((item, i) => {
                        const classes = ['nav__item'];
                        activeCommunity === item.name && classes.push('active');
                        
                        return (
                            <div className={classes.join(' ')} data-item="location" key={i} onClick={() => toggleTertiaryNav(item.name)}>
                                <span>{item.name}</span>
                            </div>
                        )
                    })}
                </div>
        )
    }

    const renderNavContact = () => <ContactInfoBar address={address} city={contact.city} postalCode={postalCode} hours={hours} phone={phone} email={email} corporatePhone={corporatePhone} />


    const propertyPage = pageId === undefined ? false : true;

    const renderTertiaryNav = () => {
        const item = navItems.filter(item => item.name === activeCommunity)[0];

        return (
                <div className="nav__locations" data-nav="desktop">
                    {item.properties.map((property, i) => {
                        return (
                            <div className="nav__item" data-item="location" key={i}>
                                <Link href={`/${property.href}`} key={i}>
                                    <span>{property.name}</span>
                                </Link>
                            </div>
                        )
                    })}
                </div>
        )
    }

    useEffect(() => {
        setNoScroll(false);
    }, [])

    useEffect(() => {
        const body = document.querySelector('body');
        noScroll ? body.classList.add('mobileNoScroll') : body.classList.remove('mobileNoScroll');
    }, [noScroll]);


    const toggleMobileNav = () => {
        if (navContactActive) {
            setNavContactActive(false);
            setNavSecondaryActive(false);
            setNoScroll(false);
        } else {
            setNoScroll(!noScroll);
            toggleSecondaryNav();    
        }
    }

    const renderMobileNav = () => {
        return !navMobileLocationsActive ? (
            <div className="nav__content" data-nav="mobile">
                    {/* <div className="nav__item" data-nav="mobile" onClick={() => setNavMobileLocationsActive(!navMobileLocationsActive)}>
                        Communities
                    </div> */}
                    <div className={navItemsClasses.about.join(' ')} data-nav="mobile" onClick={() => {setNoScroll(false); collapseNav()}}>
                    <Link href="/#neighbourhoods">
                        Communities
                    </Link>
                    </div>

                    {pageIsActive.about && <div className={navItemsClasses.about.join(' ')} data-nav="mobile">
                        <Link href="/about">
                            About
                        </Link>
                    </div>}

                    {pageIsActive.newsroom && <div className={navItemsClasses.newsroom.join(' ')} data-nav="mobile">
                        <Link href="/newsroom">
                            Newsroom
                        </Link>
                    </div>}

                    <div className={navItemsClasses.contact.join(' ')} data-nav="mobile" onClick={() => toggleNavContact('contact')} data-level="primary">
                        <span>Contact</span>
                    </div>

                    {/* {pageIsActive.careers && <div className={navItemsClasses.careers.join(' ')} data-nav="mobile">
                        <a href="https://lepine-apartments.breezy.hr/">Careers</a>
                    </div>} */}

                    <div className="nav__item" data-nav="mobile" onClick={() => {setNoScroll(false); collapseNav()}}>
                        {!propertyPage ? (<Link href="/#neighbourhoods">
                            <div className="btn themeBtn">Find My Apartment</div>
                        </Link>) : (<a href="#listings">
                            <div className="btn themeBtn">Find My Apartment</div>
                        </a>)}
                    </div>

                    {tenantServices && <div className="nav__item" data-nav="mobile">
                        <AppPopup trigger={TenantServicesTrigger} copy={tenantServices.copy} />
                    </div>}
                </div>
        ) : (               
            <div className="nav__locations" data-nav="mobile">
                {navItems.map((item, i) => {
                    const classes = ['nav__item'];
                    activeCommunity === item.name && classes.push('active');
                    
                    return (
                        <div className={classes.join(' ')} data-item="location" onClick={() => toggleTertiaryNav(item.name)} key={i}>
                            <span>{item.name}</span>

                            <div className="nav__item--properties">
                                {item.properties.map((item, i) => {
                                    return (
                                        <div className="nav__item" key={i} data-item="property" onClick={() => collapseNav()}>
                                            <Link href={`/${item.href}`}>
                                                <span>{item.name}</span>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }

    const TenantServicesTrigger = <span>Tenant Portal</span>;

    return (
        <nav className="nav">
            <div className="nav__externalLinks" data-nav="mobile">
                
                {!propertyPage ? 
                    (<NavExternalLinks phone tenantServices tenantPortal phoneHref={phoneHref} phoneNumber={phoneNumber} />)
                    :
                    (<NavExternalLinks phone listings tenantServices tenantPortal phoneHref={phoneHref} phoneNumber={phoneNumber} />)
                }
            </div>

            <div className="nav__primary">
                <div className="nav__logo">
                    <Link href="/">
                        <Image src={LogoDark} alt="Lepine" width={288} height={88} />
                    </Link>
                </div>

                <div className="nav__content" data-nav="desktop">
                    {/* <div className={navItemsClasses.communities.join(' ')} data-nav="desktop" onClick={() => toggleSecondaryNav('communities')} data-level="primary">
                        <span>Communities</span>
                    </div> */}

                    <div className="nav__item themeNavItem__hover" data-nav="desktop" data-level="primary">
                    <Link href="/#neighbourhoods">
                        Communities
                    </Link>
                    </div>

                    {pageIsActive.about && <div className={navItemsClasses.about.join(' ')} data-nav="desktop" data-level="primary">
                        <Link href="/about">
                            About
                        </Link>
                    </div>}

                    {pageIsActive.newsroom && <div className={navItemsClasses.newsroom.join(' ')} data-nav="desktop" data-level="primary">
                        <Link href="/newsroom">
                            Newsroom
                        </Link>
                    </div>}

                    <div className={navItemsClasses.contact.join(' ')} data-nav="desktop" onClick={() => toggleNavContact('contact')} data-level="primary">
                        <span>Contact</span>
                    </div>

                    {pageIsActive.careers && <div className={navItemsClasses.careers.join(' ')} data-nav="desktop" data-level="primary">
                        <Link href="/careers">
                            Careers
                        </Link>
                    </div>}
                </div>
                
                <div className="nav__externalLinks" data-nav="desktop">
                {!propertyPage ? 
                    (<NavExternalLinks phone phoneHref={phoneHref} phoneNumber={phoneNumber} tenantServices={tenantServices} />)
                    :
                    (<NavExternalLinks phone listings phoneHref={phoneHref} phoneNumber={phoneNumber} tenantServices={tenantServices} />)
                }
                </div>
               
                <div className="nav__toggle" onClick={() => toggleMobileNav()}>
                    <Image 
                        src={navSecondaryActive || navContactActive ? MenuClose : MenuOpen}
                        alt={navSecondaryActive || navContactActive ? 'Close Menu' : 'Open Menu'}
                        width={36}
                        height={36}
                    />
                </div>
            </div>

            <div className={navSecondaryClasses.join(' ')}>
                {renderSecondaryNav()}
                {renderMobileNav()}
            </div>

            <div className={navContactClasses.join(' ')}>
                <div className="nav__contact--close" onClick={() => setNavContactActive(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="37.828" height="37.828" viewBox="0 0 37.828 37.828">
                        <g id="Group_13426" data-name="Group 13426" transform="translate(1418.986 -2062.014)">
                            <line id="Line_5" data-name="Line 5" y1="35" x2="35" transform="translate(-1417.571 2063.429)" fill="none" stroke="#5e514d" strokeLinecap="square" strokeWidth="2"/>
                            <line id="Line_6" data-name="Line 6" x2="35" y2="35" transform="translate(-1417.571 2063.429)" fill="none" stroke="#5e514d" strokeLinecap="square" strokeWidth="2"/>
                        </g>
                    </svg>
                </div>
                {renderNavContact()}
            </div>

            <div className={navTertiaryClasses.join(' ')}>
                {activeCommunity !== '' && renderTertiaryNav()}
            </div>
        </nav>
    )
}

export default Nav;