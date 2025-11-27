import { useState, useEffect } from 'react';

import FloorplanIcon from '../../../assets/svg/floorplanIcon.svg';
import Image from 'next/image';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import PropertyListingsPopup from '../../PropertyListingsPopup.component';

import IsFeaturedIcon from '../../../assets/svg/isFeatured.svg';
import { ImageLoader } from '../../../utils/imageLoader';

const ListingCardV2 = ({ type, content, city, property, popupImage, pageId, registrationPortalId, registrationFormId, goalName, disableListingsPricing, leasingPhoneNumber, initListings, setInitListings, favouriteListings, setFavouriteListings }) => {
    const { id, unitId, title, sqft, price, image, pdf, onHoldExpires, status, numOfBeds, numOfBaths, model, isFeatured, officeDen } = content;

    const floorplanWidth = 163;
    const floorplanHeight = 217;

    const floorplan = image ? `https://lepine-storage.nyc3.cdn.digitaloceanspaces.com/assets/${pageId}/floorplans/${image}` : null;
    const floorplanPdf = pdf ? `https://lepine-storage.nyc3.cdn.digitaloceanspaces.com/assets/${pageId}/floorplans/${pdf}` : null;


    const FloorplanLoader = () => `${floorplan}?w=${floorplanWidth}&h=${floorplanHeight}&q=${10}`;

    let listingCardClassesInit = ['listingCard', 'themeCardBorder', 'fadeIn'];
    let listingCardClassesAfterLoad = ['listingCard', 'themeCardBorder'];

    const [listingCardClasses, setListingCardClasses] = useState(listingCardClassesInit);

    const [isProcessing, setIsProcessing] = useState(false);

    const updateListingStatus = async (id, currentStatus, newStatus) => {
        setIsProcessing(true);

        setTimeout(() => {
            if (newStatus !== currentStatus) {
                const options = {
                    method: 'PUT',
                    headers: {
                        "Authorization": `bearer ${process.env.NEXT_PUBLIC_LEPINE_ACCESS_TOKEN}`
                    }
                };
    
                let url;
                
                if (newStatus === 'On Hold') {
                    url = `/api/updateUnitStatus?id=${id}&status=${newStatus}&onHold=true`;
                } else {
                    url = `/api/updateUnitStatus?id=${id}&status=${newStatus}&onHold=false`;
                }
    
                try {
                     fetch(url, options)
                    .then(res => res.json())
                    .then(data => {
                        const newListing = data.data;
                        const updateIndex = initListings.findIndex(item => item.id === id);
                        let arr = initListings;
                        arr[updateIndex] = newListing;
                        setInitListings(() => [...arr]);
                    })
    
                } catch (error) {
                    console.log(error)
                }
            }

            setIsProcessing(false);
        }, 2000)
    }

    useEffect(() => {
        setTimeout(() => {
            setListingCardClasses(listingCardClassesAfterLoad)
        }, 1000);
    }, [title]);
    
    const LeasingStatus = ({ status }) => {
        return (
            <>
                <div className="leasingStatus" data-status={status} title={status}></div>
            </>
        )
    };

    const CardHeader = ({ type, unitId, title, status, numOfBeds, officeDen }) => {
        return (
        <div className="listingCard__header">
            <div className='listingCard__title themeHeader'>
                {type !== 'leasing' && <h4>{numOfBeds ? `${numOfBeds} Bed` : ''}{officeDen ? ' + Office' : ''}</h4>}
                {type === 'leasing' &&  <h4>{type === 'leasing' && isFeatured && ImageLoader(IsFeaturedIcon.src, '', 'Featured',  15, 15, 0.1)}  {`${unitId} ${title ? ` - ${title}` : ''} ${model ? `(${model})` : ''}`}</h4>}
                {type === 'leasing' && status && <LeasingStatus status={status} />}
            </div>

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
        );
    };

    const ListingCard = () => (
        <div className={listingCardClasses.join(' ')}>
                <CardHeader numOfBeds={numOfBeds} type={type} unitId={unitId} title={title} status={status} officeDen={officeDen} />
                
                <div className="listingCard__image">
                    {floorplan && <Image loader={FloorplanLoader} key={Math.random()} src={floorplan} alt="" height={floorplanHeight} width={floorplanWidth} />}
                </div>

                <div className="listingCard__utility">
                    {type !== 'leasing' ? <p>Available NOW!</p> : (price && price !== 0 ? <h4>${price}</h4> : '')}
                </div>

                <div className="listingCard__footer themeCardFooter">
                    <Image src={FloorplanIcon} alt="" height={24} width={24} />
                    <span>View Floorplan</span>
                </div>
            </div>
    )

    return (
        <Popup 
            trigger={ListingCard}
            modal
            nested
        >
            {close => (
                <PropertyListingsPopup
                    id={id}
                    unitId={unitId}
                    type={type}
                    close={close} 
                    pageId={pageId}
                    title={title}
                    property={property}
                    city={city}
                    model={model}
                    sqft={sqft}
                    price={price}
                    numOfBeds={numOfBeds}
                    numOfBaths={numOfBaths}
                    pdf={floorplanPdf}
                    popupImage={popupImage}
                    floorplan={floorplan}
                    registrationPortalId={registrationPortalId}
                    registrationFormId={registrationFormId}
                    goalName={goalName}
                    disableListingsPricing={disableListingsPricing}
                    leasingPhoneNumber={leasingPhoneNumber}
                    onHoldExpires={onHoldExpires}
                    status={status}
                    updateListingStatus={updateListingStatus}
                    initListings={initListings}
                    isProcessing={isProcessing}
                    listing={content}
                    setInitListings={setInitListings}
                    favouriteListings={favouriteListings}
                    setFavouriteListings={setFavouriteListings}
            />)}
        </Popup>
    )
}

export default ListingCardV2;