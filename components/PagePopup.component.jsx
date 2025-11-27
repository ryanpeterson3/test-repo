import { baseUrl, baseUrlPDF } from "../utils/baseUrl";
import { useEffect, useState } from "react";
import {renderRichText} from '../utils/renderRichText';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { ImageLoader } from "../utils/imageLoader";
import checkPopupShown from "../hooks/checkPopupShown";

const PagePopup = ({ time, content, theme, isActive }) => {
    const popupDelayTime = time * 1000;
    const [popupActive, setPopupActive] = useState(false);

    const { type, header, copy, button, image, thirdRow, logo } = content;
    
    const renderBtn = (btn) => {
        if (btn.linkDestination === 'internal') {
            return <a href={btn.link} className="btn themeBtn">{btn.copy}</a>
        } else {
            return <a href={btn.link} rel="noreferrer" target="_blank" className="btn themeBtn">{btn.copy}</a>
        }
    }
  
    const PopupContent = ({ close }) => {
        const renderThirdRow = () => {
            const { header, copy, button, icon } = thirdRow;

            return (
                 <div className="pagePopup__content pagePopup__thirdRow themeBGDark">
                       {icon && <div className="pagePopup__thirdRow--icon">
                            {ImageLoader(icon, '', '', 100, 100, 10)}
                            {header && <h3 className="pagePopup__thirdRow--iconHeader">{header}</h3>}
                        </div>}
                    <div className="pagePopup__thirdRow--copy">
                        {header && <h3 className="pagePopup__thirdRow--header">{header}</h3>}
                        {copy && <p className="" dangerouslySetInnerHTML={{ __html: renderRichText(copy) }} />}
                        {button && renderBtn(button)}
                    </div>
 
                </div>
            )
        }

        return (
            <div className="pagePopup" data-theme={theme} data-type={type}>
                <div className="pagePopup__close themeSVGLight" onClick={() => close()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="37.828" height="37.828" viewBox="0 0 37.828 37.828">
                        <g id="Group_13426" data-name="Group 13426" transform="translate(1418.986 -2062.014)">
                            <line id="Line_5" data-name="Line 5" y1="35" x2="35" transform="translate(-1417.571 2063.429)" fill="none" stroke="#5e514d" strokeLinecap="square" strokeWidth="2"/>
                            <line id="Line_6" data-name="Line 6" x2="35" y2="35" transform="translate(-1417.571 2063.429)" fill="none" stroke="#5e514d" strokeLinecap="square" strokeWidth="2"/>
                        </g>
                    </svg>
                </div>

                <div className="pagePopup__image" data-type={type}>
                    {logo && ImageLoader(logo, 'pagePopup__image--logo', '', 300, 290, 10)}
                    {ImageLoader(image, '', '', 1200, 450, 10)}
                    {header && <h2 className="themeHeader">{header}</h2>}
                </div>

                <div className="pagePopup__content" data-type={type}>
                    {copy && <div className="pagePopup__content--copy" dangerouslySetInnerHTML={{ __html: renderRichText(copy) }} />}
                    {button && renderBtn(button)}
                </div>

                {thirdRow && renderThirdRow()}              
            </div>
        )
        
    }

    useEffect(() => {
        setTimeout(() => {
        const top = window.scrollY < 50;
        const displayPopup = content && isActive && top;
        displayPopup && setPopupActive(true);
        const popupShown = checkPopupShown();
        popupShown && setPopupActive(false);

        }, popupDelayTime);
    }, []);


    return (
        <Popup open={popupActive}>
            {(close) => (<PopupContent close={close} content={content} time={time} />)}
        </Popup>
    )
}

export default PagePopup;