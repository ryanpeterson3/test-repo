import { ImageLoader } from '../../../utils/imageLoader';
import EventIcon from '../../../assets/svg/icon-event.svg';
import CloseIcon from '../../../assets/svg/openHouseClose.png';

import { useState, useEffect } from 'react'; 

const MicroPopup = ({ content }) => {
    const [displayPopup, setDisplayPopup] = useState(false);
    const [popupClosing, setPopupClosing] = useState(false);

    const checkSessionStorage = () => {
        const userClosedMicroPopup = sessionStorage.getItem("userClosedMicroPopup");
        userClosedMicroPopup ? setDisplayPopup(false) : setDisplayPopup(true);
    }

    const closeCard = () => {
        setPopupClosing(true);

        setTimeout(() => {
            sessionStorage.setItem('userClosedMicroPopup', JSON.stringify(true));
            setDisplayPopup(false);
        }, 100);
    }

    const checkPopupExpired = () => {
        if (content.expires) {
            const currentTime = Date.now();
            const expires = Date.parse(content.expires);
            currentTime > expires && setDisplayPopup(false);
        }
    }

    useEffect(() => {
        checkSessionStorage();
        checkPopupExpired();
    }, []);

    return (
        (displayPopup && 
            <div className="microPopup__wrapper" data-close={popupClosing}>
                <div className="microPopup" data-close={popupClosing} data-theme={content.theme}>
                    <div className="microPopup__row" data-row="header">
                        <div className="microPopup__close" onClick={() => closeCard()}>
                            {ImageLoader(CloseIcon.src, '', 'Close', 25, 25)}
                        </div>

                        <div className="microPopup__header">
                            <h3>OPEN<br/>HOUSE</h3>
                            {ImageLoader(EventIcon.src, '', '', 70, 70)}
                        </div>

                        <hr />

                        <div className="microPopup__subtitle">
                            <h3>In {content.property.city}</h3>
                        </div>
                    </div>
                    <div className="microPopup__row" data-row="copy">
                        <h3>{content.property.name}</h3>

                        <div>
                            <p>{content.date}</p>
                            <p>{content.time}</p>
                        </div>

                        {content.property.googleMaps ? (<a href={content.property.googleMaps} target="_blank" rel="noreferrer">
                            <p>{content.property.streetAddress}</p>
                            <p>{content.property.city}</p>
                        </a>) : (<div>
                            <p>{content.property.streetAddress}</p>
                            <p>{content.property.city}</p>
                        </div>)}
                    </div>
                </div>
            </div>
        )
    )
}

export default MicroPopup;