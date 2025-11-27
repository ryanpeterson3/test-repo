const PAWhiteGlove = () => {
    return (
        <section className="pa-grid premierappliances__whiteglove" id="whiteglove">
            <div className="premierappliances__contentBlock">
                <div className="premierappliances__contentWrapper" data-block="header">
                    <h2 className="text-gold" data-aos="fade">White Glove Service</h2>
                    <div className="premierappliances__divider" data-direction="horizontial"></div>
                    <p className="text-bold" data-aos="fade">We will install and have your appliances ready for you on the day you move in, this includes having ice makers or water hooked up to fridges if you selected appliances with these features.</p>    
                </div>

                <div className="premierappliances__contentWrapper" data-aos="fade">
                    <h3 className="text-gold">All packages come with</h3>
                    
                    <ul>
                        <li>Full warranty for the duration of the rental. This includes 1 annual scheduled maintenance for component cleaning and inspection</li>
                        <li>Filters will be changed; however, the cost of the filter is the client&apos;s responsibility, but the service is of no charge</li>
                        <li>If an appliance fails during the rental period, we will visit and perform a service call. If it is not something that can be repaired on site, an equivalent model and age appliance will be supplied as a replacement. If repair can be performed on site, it will be completed in a timely manner as parts are available</li>
                        <li>Our technicians will wear booties while in your home and leave your residence in a condition as if they were never there after the repairs are completed</li>
                        <li>Please note, if a service call is scheduled for a repair but the unit is found to be in working order or the call was for a customer caused problem, a $50 service charge will be billed</li>
                    </ul>
                </div>

                <div className="premierappliances__contentWrapper" data-aos="fade">
                    <h3 className="text-gold">After Hours Call Out</h3>
                    <p>If a break down occurs, we will schedule a priority service visit in a timely manner and get your appliance back online.</p>
                </div>

                <div className="premierappliances__contentWrapper" data-aos="fade" data-block="servicehours">
                    <h3 className="text-gold">Service Hours</h3>
                    <p className="text-bold">Monday – Friday</p>
                    <p className="text-bold">8am – 4pm</p>
                    <p data-aos="fade">We will make all efforts possible to get you back up and running as quickly as we can, please note during holidays, service calls may be delayed. Our team will reach out and discuss the issue and inform you of when you can expect them to arrive. They may help you through some troubleshooting options by phone to help determine the cause of the problem or to assist in the repair.</p>
                </div>
            </div>
        </section>
    )
}

export default PAWhiteGlove;