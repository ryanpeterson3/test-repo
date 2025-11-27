import PAContactForm from "./PAContactForm.component";

const PAContact = () => {
    const image = 'https://lepine-storage.nyc3.digitaloceanspaces.com/a433d3e5624f26d8f402051b14df2fc2.png';
    
    return (
      <section className="pa-grid premierappliances__contact" style={{ backgroundImage: `url('${image}')` }}>
          <div className="premierappliances__contentBlock" id="contact">
            <PAContactForm />
          </div>
      </section>
    )
}

export default PAContact;