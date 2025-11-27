import Link from "next/link";

const GuideCard = ({ header, copy, image, link }) => {
    const styles = {
        backgroundImage: `url('${image}')`,
    };

    return (
        <div className="guideCard" style={styles}>
            <div className="guideCard__content">
                <div className="themeBGLight guideCard__content--wrapper">
                    <h2>Get the free guide to<br />{header}</h2>
                </div>
                
                <div className="themeBGLight guideCard__content--wrapper">
                    <h3>{copy}</h3>
                    <a href={link} target="_blank" rel="noreferrer">
                        <div className="btn themeBtn">Get the Guide - Free</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GuideCard;