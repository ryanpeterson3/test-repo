import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import menuOpen from '../../../assets/svg/menuOpenLight.svg';
import menuClose from '../../../assets/svg/menuCloseLight.svg';

const PANav = ({ isSticky }) => {
    const [navMobileActive, setMobileNavActive] = useState(false);

    const navWrapperClasses = ['premierappliances__nav'];
    isSticky && navWrapperClasses.push('sticky');

    const contentClasses = ['premierappliances__nav--content'];
    navMobileActive && contentClasses.push('active');

    useEffect(() => {
        window.addEventListener('resize', () => setMobileNavActive(false));
    }, []);

    return (
        <nav className={navWrapperClasses.join(' ')}>
            <div className="premierappliances__nav--logo">
                <Image src="https://lepine-storage.nyc3.digitaloceanspaces.com/287b976e01c2fdbae7ee7e6e150d29fc.svg" height={200} width={200} alt="Premier Appliances" />
                {navMobileActive && <Image className="premierappliances__nav--close" src={menuClose.src} height={25} width={25} alt="Close" onClick={() => setMobileNavActive(!navMobileActive)} />}
                {!navMobileActive && <Image className="premierappliances__nav--open" src={menuOpen.src} height={25} width={25} alt="Open" onClick={() => setMobileNavActive(!navMobileActive)} />}
            </div>

            <div className={contentClasses.join(' ')}>
                {isSticky && <div onClick={() => setMobileNavActive(false)} className="premierappliances__nav--item premierappliances__nav--logo premierappliances__navSticky--logo">
                    <Image src="https://lepine-storage.nyc3.digitaloceanspaces.com/cb2b5bb75816d7f619e6a762e749e596.svg" height={200} width={200} alt="Premier Appliances" />
                </div>}

                <Link onClick={() => setMobileNavActive(false)} href="#about" className="text-bold text-upper premierappliances__nav--item">About</Link>
                <Link onClick={() => setMobileNavActive(false)} href="#packages" className="text-bold text-upper premierappliances__nav--item">Packages</Link>
                <Link onClick={() => setMobileNavActive(false)} href="#howitworks" className="text-bold text-upper premierappliances__nav--item">How It Works</Link>
                <Link onClick={() => setMobileNavActive(false)} href="#vendors" className="text-bold text-upper premierappliances__nav--item">Brands</Link>
                <Link onClick={() => setMobileNavActive(false)} href="#whiteglove" className="text-bold text-upper premierappliances__nav--item">White Glove Service</Link>
                <Link onClick={() => setMobileNavActive(false)} href="#contact" className="text-bold text-upper premierappliances__nav--item">Contact</Link>
            </div>
        </nav>
    );
}

export default PANav;