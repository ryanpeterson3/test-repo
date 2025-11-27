import chatIcon from '../../../assets/svg/chatIcon.svg';
import menuCloseLight from '../../../assets/svg/menuCloseLight.svg';
import Image from "next/image";

const PAIcon = ({ type, cb }) => {
    if (type === 'close') {
        return (
            <div className="premierappliances__icon premierappliances__close" onClick={() => cb && cb(false)}>
                <Image src={menuCloseLight.src} height={24} width={24} alt="Close" />
            </div>
        )
    } else {
        return (
            <div className="premierappliances__icon premierappliances__open" onClick={() => cb && cb(true)} data-aos="fade-up" data-aos-delay="1000">
                <Image src={chatIcon.src} height={24} width={24} alt="Contact" />
            </div>
        )
    }
}

export default PAIcon;