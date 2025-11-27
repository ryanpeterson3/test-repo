import { useState, useEffect } from 'react';
import Image from "next/image";
import MapPinIcon from '../assets/svg/mapPin.svg';
import PropertyForm from './PropertyForm.component';
import menuCloseIcon from '../assets/svg/menuCloseLight.svg'

const PropertyListingsPopup = ({
        id,
        unitId,
        type,
        pageId,
        title,
        property,
        city,
        sqft,
        pdf,
        price,
        popupImage,
        numOfBeds,
        numOfBaths,
        floorplan,
        close,
        registrationPortalId,
        registrationFormId,
        goalName,
        bookAppointmentURL,
        status,
        model,
        listing
}) => {
    const [registrationFormActive, setRegistrationFormActive] = useState(false);
    const [activePopupContent, setActivePopupContent] = useState('floorplan');

    useEffect(() => {
        if (registrationPortalId && registrationFormId) {
            setRegistrationFormActive(true);
        }
    }, []);

    const onPopupSubmit = () => {
        setTimeout(() => setActivePopupContent('floorplan'), 2500);
    }

    const submitGAEvent = () => {
        const gtag = window.gtag;
        goalName && gtag('event', goalName);
    };

    const floorplanClasses = ['listingPopup__screen'];
    activePopupContent === 'floorplan' && floorplanClasses.push('active');

    const registrationFormClasses = ['listingPopup__screen'];
    activePopupContent === 'registrationForm' && registrationFormClasses.push('active');

    const hiddenFieldValues = {
        unitId: unitId,
    };

    const ListingPopupInfo = ({ id, unitId, title, icon, property, city, type, price, sqft, popupImage }) => {
        const ListingAttributes = () => {
            return (
                <div className="listingPopup__info--group" data-group="attributes">
                    <h3>Unit Features</h3>

                    <ul>
                        {numOfBeds && <li>{numOfBeds > 1 ? `${numOfBeds} Bed` : `${numOfBeds} Bed`}</li>}
                        {numOfBaths && <li>{numOfBaths > 1 ? `${numOfBaths} Bath` : `${numOfBaths} Bath`}</li>}
                        {listing.balcony && <li>Balcony</li>}
                        {listing.barrierFree && <li>Barrier Free</li>}
                        {listing.builtIns && <li>Built-In Office</li>}
                        {listing.juliet && <li>Juliet</li>}
                        {listing.officeDen && <li>Den</li>}
                        {listing.pantry && <li>Pantry</li>}
                        {listing.terrace && <li>Terrace</li>}
                        {listing.tub && <li>Tub</li>}
                        {listing.walkInCloset && <li>Walk-In Closet</li>}
                    </ul>
                </div>
            )
        }

        return (
            <div className="listingPopup__info">
                <div className="listingPopup__info--content themeBGLight">
                    <div className="listingPopup__info--group" data-group="unit">
                        {title ? <h3>{title}</h3> : <h3>{numOfBeds ? `${numOfBeds} Bed` : ''}{listing.officeDen ? ' + Office' : ''}</h3>}
                        {unitId &&  <h3>{`${unitId} ${title ? ` - ${title}` : ''} ${model ? `(${model})` : ''}`}</h3>}

                        {property && city &&  <div className="listingPopup__info--location">
                            <Image src={icon} alt="" height={16} width={12} />
                            <p>{property}, {city}</p>
                        </div>}
                        
                        {type === 'leasing' && price && price !== 0 ? <p>${price}</p> : ''} 
                        <p>{sqft} sqft</p>
                    </div>

                    {/* <ListingAttributes /> */}
                </div>
        </div>);
    }

    const floorplanBG = {
        backgroundImage: `url('${floorplan}')`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    };

        return (<div className="listingPopup" data-theme={pageId}>
                <div className={floorplanClasses.join(' ')} data-screen="floorplan">
                    <ListingPopupInfo 
                        id={id}
                        unitId={unitId}
                        title={title}
                        icon={MapPinIcon}
                        property={property}
                        city={city}
                        type={type}
                        price={price}
                        sqft={sqft}
                        status={status}
                        registrationFormId={registrationFormId}
                        registrationPortalId={registrationPortalId}
                        bookAppointmentURL={bookAppointmentURL}
                        popupImage={popupImage}
                    />

                <div className="listingPopup__floorplan" data-type={type}>
                    <div className="listingPopup__floorplan--wrapper" style={floorplanBG} />
                </div>

                {type !== 'commercial' && <div className="listingPopup__btns">
                    {registrationPortalId && registrationFormId && registrationFormActive && (<div className="btn themeBtn" onClick={() => setActivePopupContent('registrationForm')}>Inquire Now</div>)}
                    {pdf && <a className='btn themeBtn listingPopup__pdf' href={pdf} target="_blank" rel="noreferrer">Download PDF</a>}
                </div>}
            </div>

            <div className="listingPopup__menu">
                <div className="listingPopup__close themeBtn" onClick={close}>
                    <Image src={menuCloseIcon} alt="" height={25} width={25} />
                </div>
            </div>

            {registrationPortalId && registrationFormId && type !== 'commercial' && <div className={registrationFormClasses.join(' ')} data-screen="registrationForm">
                <div className="listingPopup__form--container">
                    <div className="listingPopup__form--content">
                        <PropertyForm
                            hiddenFieldValues={hiddenFieldValues}
                            portalId={registrationPortalId}
                            formId={registrationFormId}
                            onSubmit={() => submitGAEvent()}
                            setFormSubmitted={() => onPopupSubmit()}
                        />
                    </div>
                </div>
            </div>}
    </div>
    )
}

export default PropertyListingsPopup;