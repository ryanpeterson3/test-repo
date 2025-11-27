import ContentWrapper from "../../../sections/ContentWrapper.component";
import { ImageLoader } from "../../../utils/imageLoader";
import ContentWrapperV2 from "../ContentWrapper/ContentWrapperV2.component";

const StressTest = ({ header, subtitle, copy, btnHref, btnCopy, image, backgroundImage, listHeader, list }) => {
    const ListItem = ({copy}) => (
        <div className="stressTest__list--item">
            <div className="stressTest__list--icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24.581" height="23" viewBox="0 0 24.581 23">
                    <path id="Path_83126" data-name="Path 83126" d="M13.5,14.167l3.5,3.5L28.667,6" transform="translate(-5.5 -3.833)" fill="none" stroke="#000000" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2"/>
                    <path id="Path_83127" data-name="Path 83127" d="M25.5,15v8.167A2.333,2.333,0,0,1,23.167,25.5H6.833A2.333,2.333,0,0,1,4.5,23.167V6.833A2.333,2.333,0,0,1,6.833,4.5H19.667" transform="translate(-3.5 -3.5)" fill="none" stroke="#000000" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2"/>
                </svg>
            </div>

            <div className="stressTest__list--copy">
                <p>{copy}</p>
            </div>
        </div>
    );

    let bgImageStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no repeat'
    };

    if (backgroundImage) {
        bgImageStyle.backgroundImage = `url('${backgroundImage}')`;
    }
    
    return (
        <section className="stressTest sp" id="stressTest">
            <ContentWrapper size="xl" cssClass="stressTest__container" style={bgImageStyle}>
                {header && <h2 className="stressTest__header themeHeader" data-screen="mobile">{header}</h2>}
                {subtitle && <h3 className="stressTest__subtitle" data-screen="mobile">{subtitle}</h3>}

                <div className="stressTest__image" data-aos="fade">
                <div className="stressTest__image--wrapper">
                    {image && ImageLoader(image, '', '', 550, 760, 0.1)}
                </div>
                </div>

                <div className="stressTest__content">
                    {header && <h2 className="stressTest__header themeHeader" data-screen="desktop">Free<br/>Download</h2>}
                    {subtitle && <h3 className="stressTest__subtitle" data-screen="desktop">{subtitle}</h3>}

                    <div className="stressTest__copy">
                        {copy && <p>{copy}</p>}
                        {btnCopy && btnHref && <a href={btnHref} className="btn stressTest__btn themeBtn" target="_blank" rel="noreferrer" data-screen="desktop">{btnCopy}</a>}
                    </div>

                    <div className="stressTest__list">
                        <h3 className="themeHeader">{listHeader}</h3>
                        <div className="stressTest__list--wrapper">
                            {list.map((copy, i) => <ListItem key={i} copy={copy} />)}
                        </div>
                        {btnCopy && btnHref &&  <a href={btnHref} className="btn stressTest__btn themeBtn" target="_blank" rel="noreferrer" data-screen="mobile">{btnCopy}</a>}
                    </div>
                </div>
            </ContentWrapper>
        </section>)
}

export default StressTest;