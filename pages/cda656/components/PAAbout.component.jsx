const PAAbout = () => {
    // const image = 'https://lepine-storage.nyc3.digitaloceanspaces.com/57cfcfa5c1a9f746801ca219ea8db3d9.jpg';
    const image = 'https://lepine-storage.nyc3.digitaloceanspaces.com/972679e99a500a1f8d4bddc5a841016a.png';

    return (
        <section className="pa-grid premierappliances__about" id="about" style={{ backgroundImage: `url('${image}')` }}>
            {/* <div className="premierappliances__contentBlock--mobileImage">
                <Image src={image} height={500} width={500} alt="" />
            </div> */}

            <div className="premierappliances__contentBlock">
                <h2 className="text-gold" data-aos="fade-left">Tailor your home<br />with customized appliances</h2>
                <div className="premierappliances__divider" data-direction="horizontial"></div>
                <p data-aos="fade-left">Premier Appliances brings you the freedom to choose your appliances.
Whether you love baking, hosting dinner parties, or crafting gourmet meals, our
flexible appliance packages allow you to create your dream kitchen – giving you
the flexibility to upgrade, customize, or change your setup as your needs evolve,
all with white glove service.</p>
                <p className="text-bold" data-aos="fade-left">Say goodbye to standard options<br/>and hello to a personalized living experience.</p>
            </div>
        </section>
    )
}

export default PAAbout;