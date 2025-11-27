import { useState } from "react";

const PAContactForm = ({ contactPopupActive, setContactPopupActive, isPopup }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        rentalStartDate: '',
        message: ''
    });

    const [formResponse, setFormResponse] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();

        const formIsValid = validateForm(form);
        
        
        if (formIsValid) {
            try {
                setFormResponse('Submitting your inquiry...');

                setTimeout(async () => {
                    const fields = {
                        name: form.name,
                        email: form.email,
                        rentalStartDate: form.rentalStartDate,
                        phoneNumber: form.phoneNumber,
                        message: form.message
                    };
                    
                    const response = await fetch('/api/premierappliances/contact', {
                        method: 'POST',
                        headers: {
                            "Content-Type": 'application/json'
                        },
                        body: JSON.stringify(fields),
                    });
        
                    if (response.status !== 400) {
                        const data = await response.json();
                        await setFormResponse(data.message);

                        setTimeout(() => {
                            setForm({
                                name: '',
                                email: '',
                                phoneNumber: '',
                                rentalStartDate: '',
                                message: ''
                            });

                            setFormResponse('');

                            isPopup && setContactPopupActive(false);
                        }, 2500)
                    } else {
                        await setFormResponse(response.error);
                    }
                }, 2500);
            } catch (error) {
                await setFormResponse('Something went wrong! Please email santana@campanale.com');
            }
        } else {
            setFormResponse('Please provide a name and an email');
        }
    }

    const validateForm = (form) => {
        if (form.name === "" || form.email === "") {
            return false;
        } else return true;
    }

    const updateFormValue = (e) => {
        e.preventDefault();
        setFormResponse('');

        setForm(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        });
    }

    return (
        <>
            <h2 className="text-gold" data-aos="fade-down">Contact</h2>

            <div className="premierappliances__divider" data-direction="horizontial"></div>

            {!isPopup && <div className="premierappliances__contact--info">
                <a href="mailto:dave@premierappliances.ca" data-aos="fade-up" data-aos-delay="100">
                    <h4>info@premierappliances.ca</h4>
                </a>
                <a href="tel:6132268955" data-aos="fade-up" data-aos-delay="150"><h4>613-226-8955</h4></a>
            </div>
}
            <div className="premierappliances__contact--form">
                <p>Name (required)</p>
                <input required name="name" type="text" className="premierappliances__contact--input" onInput={(e) => updateFormValue(e)} value={form.name} />
                <p>Email (required)</p>
                <input required name="email" type="email" className="premierappliances__contact--input" onInput={(e) => updateFormValue(e)} value={form.email} />
                <p>Phone Number</p>
                <input name="phoneNumber" type="text" className="premierappliances__contact--input" onInput={(e) => updateFormValue(e)} value={form.phone} />
                <p>Rental Start Date</p>
                <input name="rentalStartDate" type="date" className="premierappliances__contact--input" onInput={(e) => updateFormValue(e)} value={form.phone} />
                <p>Message</p>
                <textarea name="message" type="text" className="premierappliances__contact--input" onInput={(e) => updateFormValue(e)} value={form.message} />
            </div>

            {formResponse !== "" ? <p>{formResponse}</p> : <p>&nbsp;</p>}
            <button className="premierappliances__contact--submit" onClick={(e) => submitForm(e)}>Submit</button>
        </>
    );
}

export default PAContactForm;