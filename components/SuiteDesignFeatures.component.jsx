import ContentWrapper from "../sections/ContentWrapper.component";
import { ImageLoader } from "../utils/imageLoader";

const SuiteDesignFeatures = ({ header, items, image }) => {
    return (
        <section id="suiteDesign" className="suiteDesign" data-aos="fade">
            <div className="suiteDesign__image">
                {ImageLoader(image, '', '', 960, 920, 10)}
            </div>

            <div className="suites__list--wrapper">
                <ContentWrapper>
                    <div className="suites__list">
                            <h2 className="themeHeader">{header}</h2>
                            <ul>
                                {items.map((item, i) => <li className="themeListItem" key={i}>{item}</li>)}
                            </ul>
                    </div>
                </ContentWrapper>
            </div>
        </section>
    )
}

export default SuiteDesignFeatures;