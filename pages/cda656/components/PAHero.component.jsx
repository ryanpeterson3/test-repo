import Image from "next/image";

const PAHero = () => {
    // const image = 'https://lepine-storage.nyc3.digitaloceanspaces.com/13270d9e9b1a36526d60edb07046b8b0.jpg';
    const image = 'https://lepine-storage.nyc3.digitaloceanspaces.com/a433d3e5624f26d8f402051b14df2fc2.png';
    
    return (
        <section className="pa-grid premierappliances__hero" id="hero" style={{ backgroundImage: `url('${image}')` }}>
            <div className="premierappliances__hero--copy" data-aos="fade-up" data-aos-delay="250"><h1>Welcome to the new era<br/>of appliances</h1></div>
            <div className="premierappliances__contentBlock premierappliances__hero--logo" data-aos="fade-in">
                <Image src="https://lepine-storage.nyc3.digitaloceanspaces.com/cb2b5bb75816d7f619e6a762e749e596.svg" height={216} width={407} />
            </div>
        </section>
    )
}

export default PAHero;