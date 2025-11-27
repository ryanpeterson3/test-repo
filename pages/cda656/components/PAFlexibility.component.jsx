const PAFlexibility = () => {
  const image = 'https://lepine-storage.nyc3.digitaloceanspaces.com/672920280fea1e8725e3fcaa17a23baa.png';
  
  return (
    <section className="pa-grid premierappliances__flexibility" id="flexibility" style={{ backgroundImage: `url('${image}')` }}>
      <div className="premierappliances__contentBlock">
        <h2 className="text-gold" data-aos="fade-up">Flexibility<br/>for every lifestyle</h2>
        <div className="premierappliances__divider" data-direction="horizontial"></div>
        <p data-aos="fade-down">If your preferences change, so can your appliances. Whether you want
          the latest features or a new style, we&apos;ve got you covered. Upgrade
          anytime and enjoy the freedom of choice without hassle.</p>
      </div>
    </section>
  )
}

export default PAFlexibility;