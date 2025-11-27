import { useState, useEffect } from "react";
import Image from "next/image";

import ContentWrapper from "../sections/ContentWrapper.component";
import PropertyForm from "./PropertyForm.component";

import ContactImage from '../assets/images/contact.jpg'
import { parsePhoneNumber } from "../utils/parsePhoneNumber";

const PropertyContact = ({ name, portalId, formId, pageId, goalName, phone }) => {
    const [formSubmitStatus, setFormSubmitStatus] = useState(false);

    const setFormState = async () => {
        const form = await JSON.parse(localStorage.getItem(`${formId}Submitted`));

        if (!form) {
            localStorage.setItem(`${formId}Submitted`, JSON.stringify(false));
        } else {
            setFormSubmitStatus(true);
        }

        const fbFormSubmitted = window.location.search.split('?')[1] === 'formSubmitted';

        if (fbFormSubmitted) {
          setFormSubmitted(true);
        }
    }

    const setFormSubmitted = async (e) => {
        await localStorage.setItem(`${formId}Submitted`, JSON.stringify(true));
        setFormSubmitStatus(true);
    }

    const submitGAEvent = () => {
        const gtag = window.gtag;
        goalName && gtag('event', goalName);
    }

    useEffect(() => {
        setFormState();
    }, [pageId]);

    const formSubmittedContent = () => {
        return (
            <div className="propertyContact__content">
                <ContentWrapper cssClass="propertyContact__submitted">
                    <h3 className="themeHeader">Thank you for submitting the form!</h3>
                </ContentWrapper>
            </div>
        );
    }

    const formNotSubmittedContent = () => {
        return (
            <div className="propertyContact__content">
                    <div className="propertyContact__content--wrapper">
                        <h2 className="propertyContact__header themeHeader">Contact</h2>
                        <p className="propertyContact__subtitle themeHeader">Get in touch with a Lépine specialist today</p>
                        {phone && <p className="propertyContact__subtitle themeHeader">{phone}</p>}
                        {name && <p className="propertyContact__copy">Curious about living at {name}? Fill out the form below and one of our leasing agents will be in touch!</p>}
                    </div>
                    
                    <div className="propertyContact__form">
                       <PropertyForm
                            portalId={portalId}
                            formId={formId}
                            setFormSubmitted={setFormSubmitted}
                            onSubmit={() => submitGAEvent()}
                            key={formId}
                        />
                    </div>
            </div>
        )
    }

    return (
        <section id="contact" className="propertyContact">
            <div className="propertyContact__image">
                <Image src={ContactImage} alt="" height={1000} width={1000} />
            </div>
            {formSubmitStatus === true ? formSubmittedContent() : formNotSubmittedContent()}
        </section>
    );
}

export default PropertyContact;