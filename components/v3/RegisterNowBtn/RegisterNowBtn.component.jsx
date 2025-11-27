import Link from "next/link";
import { useEffect, useState } from 'react';
import StarOutline from '../../../assets/images/staroutline.png';
import { ImageLoader } from "../../../utils/imageLoader";
import { submitGAEvent } from "../../../utils/submitGAEvent";

const RegisterNowBtn = ({ placement, href, copy, cb }) => {
    const [displayBtn, setDisplayBtn] = useState(false);
    const [initScroll, setInitScroll] = useState(false);

    useEffect(() => {
        if (initScroll) {
            const heroEl = document.getElementById('hero');
            const contactEl = document.getElementById('contact');
            const footerEl = document.getElementById('footer');

            const cb = (entries, observer) => entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setDisplayBtn(false);
                } else {
                    setDisplayBtn(true);
                }
            });

            let opt = {
                rootMargin: '0px',
                threshold: 0.1
            }
        
            const observer = new IntersectionObserver(cb, opt);

            heroEl && observer.observe(heroEl);
            contactEl && observer.observe(contactEl);
            footerEl && observer.observe(footerEl);
        }
    }, [initScroll]);

    useEffect(() => {
        window.addEventListener('scroll', () => setInitScroll(true));
    }, [])

    return (
        <div className="registerNowBtn__wrapper" data-placement={placement ? placement : 'right'} data-hide={!displayBtn} onClick={() => { cb && cb(true); submitGAEvent('learn_more_btn_clicked')}}>
            <Link className="registerNowBtn btnGreen" href={href}>
                <div className="registerNowBtn__overlay"></div>
                {/* {ImageLoader(StarOutline.src, '', '', 25, 25)} */}
                <div className="registerNowBtn__copy">{copy}</div>
            </Link>
        </div>
    )
}

export default RegisterNowBtn;