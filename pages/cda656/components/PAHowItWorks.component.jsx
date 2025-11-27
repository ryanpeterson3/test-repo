const PAHowItWorks = () => {
    const image = 'https://lepine-storage.nyc3.digitaloceanspaces.com/6c386fbf1231997f11704559dfdb2e53.jpg';

    return (
        <section className="pa-grid premierappliances__howitworks" id="howitworks" style={{ backgroundImage: `url('${image}')` }}>
            <div className="premierappliances__contentBlock">
                <h2 className="text-gold" data-aos="fade-right">How it works</h2>

                <div className="premierappliances__divider" data-direction="horizontial"></div>

                <p className="text-bold" data-aos="fade-right">Simple, flexible and worry-free!</p>

                <p className="" data-aos="fade-right">Exclusive Appliance Program for Lépine Clients</p>
                <p className="" data-aos="fade-right">Enjoy a seamless, stress-free experience with our tailored appliance solutions.
Choose from pre-designed packages or customize your selection to suit your lifestyle.
Whether you&apos;re looking to purchase or lease appliances, select a term that aligns with
your lease, and we&apos;ll ensure installation is complete before your move-in date.</p>
                <p className="" data-aos="fade-right">We take care of maintenance, repairs, and replacements, so you can focus on what
                matters – living your best life. Discover effortless living today!</p>
                
            </div>          
        </section>
    )
}

export default PAHowItWorks;