import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import HubspotForm from 'react-hubspot-form';
import ContactUnsubscribe from './ContactUnsubscribe.component';

const ContactOnly = ({ type, portalId, formId, pageId, goalName, bookNowURL, showMeeting, setShowMeeting, showMeetingToggle, tourLocation, phone }) => {
    const renderForm = () => {
        if (formSubmitStatus) {
            return <h3 className="themeHeader">Thank you for submitting the form!</h3>
        } else {
            return (
                <>
                    <HubspotForm
                        portalId={portalId}
                        formId={formId}
                        onReady={() => {
                            const script = document.createElement('script');
                            script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
                            let jqueryScript = document.getElementsByTagName('script');
                            let src = Array.from(jqueryScript).filter(item => item.src === script.src)
                            if(src.length === 0) {
                            document.body.appendChild(script)
                            }
                        }}
                        onSubmit={() => {
                            const gtag = window.gtag;
                            goalName && gtag('event', goalName);
                        }}
                        onFormSubmitted={() => setFormSubmitted()}
                        loading={<div>Loading...</div>}  
                    />
                    
                    <ContactUnsubscribe />
                </>
            )
        }
    }

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
    
    useEffect(() => {
        setFormState();
    }, [pageId]);

    return (
        <>
            <section id="contact" className="contactV2 sp" style={{ background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(5px)', borderRadius: '0', width: '100%', height: '100%' }}>
                <div className="contactV2__row" data-row="main" data-type={type} style={{ borderRadius: '0', justifyContent: 'center' }}>
                    <div className="contactV2__col" data-aos="fade" style={{ padding: '25px', borderRadius: '0', rowGap: '20px' }}>
                        {type === 'form' && <h2 className="themeHeader">Contact</h2>}
                        {tourLocation && <h3 className="themeHeader">{tourLocation}</h3>}

                        {phone && <a href={`tel:${phone}`}><h3 className="themeHeader" onClick={() => {
                        const gtag = window.gtag;
                        gtag('event', 'phone_number_clicked');
                    }}>{phone}</h3></a>}
                        {bookNowURL && showMeetingToggle && <div className="slider__container">
                            <p className="themeHeader">{showMeeting ? 'Show Form' : 'Show Calendar'}</p>
                            <label className="switch"><input defaultChecked={showMeeting} checked={showMeeting} type="checkbox" onClick={() => setShowMeeting(!showMeeting)} /><span className="slider round"></span></label>
                        </div>}

                        <div className="contactV2__copy" data-type={type} data-visible={!showMeeting}>
                            {renderForm()}
                        </div>

                        {bookNowURL && <div className="contactV2__copy--meeting" data-type={type} data-visible={showMeeting}>
                            <iframe className="meetings-iframe-container" data-src={bookNowURL} src={bookNowURL} key={bookNowURL} id={bookNowURL} frameBorder="0"></iframe>
                        </div>}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactOnly;