import PAIcon from "./PAIcon.component";
import PAContactForm from "./PAContactForm.component";

const PAContactPopup = ({ isActive, contactPopupActive, cb }) => {
    const classes = ['premierappliances__contactpopup'];
    isActive && classes.push('active');

    return (
        <section className={classes.join(' ')}>
            <div className="premierappliances__contactpopup--close">
                <PAIcon type="close" cb={cb} />
            </div>

            <div className="premierappliances__contentBlock">
                <PAContactForm isPopup contactPopupActive={isActive} setContactPopupActive={cb} />
            </div>
        </section>
    );
}

export default PAContactPopup;