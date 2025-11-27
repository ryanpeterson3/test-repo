import ContactInfoBar from '../components/ContactInfoBar.component';
import { baseUrl } from '../utils/baseUrl';
import { ImageLoader } from '../utils/imageLoader';

const Contact = ({ content, contactUs }) => {
    const { header, subtitle, copy, images } = contactUs;
    const { address, city, postalCode, phone, email, hours, corporatePhone } = content.info;

    const image1 = baseUrl(images.data[0].attributes.url);
    const image2 = baseUrl(images.data[1].attributes.url);

    const mobileInfoBG = {
        backgroundImage: `url('${image2}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.25
    }

    return (
        <section id="contact" className="contact">
            <div className="contact__row">
                <div className="contact__col" data-col="img">
                    {ImageLoader(image1, '', '', 650, 500, 10)}
                </div>
                <div className="contact__col" data-col="cta">
                   <div className="contact__copy">
                        {header && <h2>{header}</h2>}
                        <br />
                        {subtitle && <p>{subtitle}</p>}
                        <br />
                        {phone && <h3>Call {phone}</h3>}
                        {copy && <p>{copy}</p>}
                   </div>
                </div>
                <div className="contact__col" data-col="img">
                    {ImageLoader(image2, '', '', 650, 500, 10)}
                </div>
            </div>

            <ContactInfoBar mobileInfoBG={mobileInfoBG} address={address} city={city} postalCode={postalCode} hours={hours} phone={phone} email={email} corporatePhone={corporatePhone} />
        </section>
    )
}

export default Contact;