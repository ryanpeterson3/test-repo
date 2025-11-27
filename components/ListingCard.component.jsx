import { useState, useEffect } from 'react';

import FloorplanIcon from '../assets/svg/floorplanIcon.svg';
import FloorplanTemp from '../assets/svg/floorplanTemp.svg';
import Image from 'next/image';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import PropertyListingsPopup from './PropertyListingsPopup.component';

const ListingCard = ({ content, city, property, popupImage, pageId, registrationPortalId, registrationFormId, goalName, bookAppointmentURL, disableListingsPricing, leasingPhoneNumber }) => {
    const { title, price, sqft, pdf, numOfBeds, numOfBaths } = content;
    const floorplanWidth = 163;
    const floorplanHeight = 217;
    const floorplan = content.floorplan === 'N/A' ? FloorplanTemp : content.floorplan;

    const FloorplanLoader = () => `${floorplan}?w=${floorplanWidth}&h=${floorplanHeight}&q=${10}`;

    let listingCardClassesInit = ['listingCard', 'themeCardBorder', 'fadeIn'];
    let listingCardClassesAfterLoad = ['listingCard', 'themeCardBorder'];

    const [listingCardClasses, setListingCardClasses] = useState(listingCardClassesInit)

    useEffect(() => {
        setTimeout(() => {
            setListingCardClasses(listingCardClassesAfterLoad)
        }, 1000);
    }, [title])

    const Card = () => (
        <div className={listingCardClasses.join(' ')}>
                <div className="listingCard__header">
                    <h4 className='listingCard__title themeHeader'>{title}</h4>
                    <div className="listingCard__location themeSVGDark">
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="12.23" height="16.31" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.23 16.31">
                        <defs>
                            <clipPath id="clippath">
                            <rect y="0" width="12.23" height="16.31" fill="none"/>
                            </clipPath>
                        </defs>
                        <g id="Group_13434" data-name="Group 13434">
                            <g clipPath="url(#clippath)">
                            <g id="Group_13093" data-name="Group 13093">
                                <path d="m5.49,15.98C.86,9.27,0,8.58,0,6.12,0,2.74,2.74,0,6.11,0c3.38,0,6.12,2.74,6.12,6.11h0c0,2.47-.86,3.16-5.49,9.86-.24.35-.72.43-1.06.19l-.19-.19h0Zm.63-7.82c1.41,0,2.55-1.14,2.55-2.55s-1.14-2.55-2.55-2.55-2.55,1.14-2.55,2.55,1.14,2.55,2.55,2.55Z" fill="#fff"/>
                            </g>
                            </g>
                        </g>
                        </svg>
                        <p>{property}, {city}</p>
                    </div>
                </div>
                
                <div className="listingCard__image">
                    {floorplan && <Image loader={FloorplanLoader} key={Math.random()} src={floorplan} alt="" height={floorplanHeight} width={floorplanWidth} />}
                </div>

                <div className="listingCard__availability">
                    <p>Available NOW!</p>
                </div>

                <div className="listingCard__footer themeCardFooter">
                    <Image src={FloorplanIcon} alt="" height={24} width={24} />
                    <span>View Floorplan</span>
                </div>
            </div>
    )
    
    return (
        <Popup trigger={Card} modal nested>
            {close => (
                <PropertyListingsPopup
                    close={close} 
                    pageId={pageId}
                    title={title}
                    property={property}
                    city={city}
                    sqft={sqft}
                    price={price}
                    pdf={pdf}
                    listing={content}
                    popupImage={popupImage}
                    floorplan={floorplan}
                    registrationPortalId={registrationPortalId}
                    registrationFormId={registrationFormId}
                    goalName={goalName}
                    bookAppointmentURL={bookAppointmentURL}
                    disableListingsPricing={disableListingsPricing}
                    leasingPhoneNumber={leasingPhoneNumber}
            />)}
        </Popup>
    )
}

export default ListingCard;