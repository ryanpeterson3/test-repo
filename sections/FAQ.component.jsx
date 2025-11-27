import { useState } from "react";
import ContentWrapper from "./ContentWrapper.component";
import CornerFloatImage from "../components/v2/CornerFloatImage/CornerFloatImage.component";

const FAQ = ({ content, v2 }) => {
    const [currentCategory, setCurrentCategory] = useState('building');

    const FAQButton = ({ category }) => {
        const classes = ['faq__btn'];
        currentCategory === category ? classes.push('themeBGDark', 'active') : classes.push('themeBGLight');

        return (
            <div className={classes.join(' ')} data-faq={category} onClick={() => toggleFAQCategory(category)}>
                <p className="faq__btn--copy">The {category}</p>
            </div>
        )
    }

    const FAQSection = ({ category, items }) => {
        const classes = ['faq__category'];
        currentCategory === category && classes.push('active');


        const [activeFAQ, setActiveFAQ] = useState(0);

        return (
            <div className={classes.join(' ')} data-faq={category}>
                {
                    items.map((faq, i) => {
                        return (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} isActive={i === activeFAQ} setActiveFAQ={setActiveFAQ} faqKey={i} />
                        )
                    })
                }
            </div>
        )
    }

    const FAQItem = ({ question, answer, isActive, setActiveFAQ, faqKey }) => {
        const itemClasses = ['faq__item'];
        isActive && itemClasses.push('active');

        const questionClasses = ['faq__question'];
        // isActive && questionClasses.push('themeBGDark');

        const questionHeaderClasses = ['themeHeader'];

        return (
            <div className={itemClasses.join(' ')} onClick={() => setActiveFAQ(faqKey)}>
                <div className={questionClasses.join(' ')}>
                    <h3 className={questionHeaderClasses.join(' ')}>{question}</h3>
                    <div className="faq__question--icon themeBorder">
                        {isActive ? '-' : '+'}
                    </div>
                </div>

                <div className="faq__answer">
                    <p>{answer}</p>
                </div>
            </div>
        );
    }

    const toggleFAQCategory = (category) => {
        category !== currentCategory && setCurrentCategory(category);
    }

    return (
            <section id="faq" className="faq sp" data-aos="fade">
                {v2 && <CornerFloatImage
                    image="https://lepine-storage.nyc3.digitaloceanspaces.com/8374057f9c6b3e049e934d7bfe144fc1.jpg"
                    position="left"
                    width="600"
                    height="1000"
                />}
                <ContentWrapper size={v2 ? 'xl' : 'lg'}>
                    <h2 className="faq__header themeHeader">Frequently Asked<br/>Questions</h2>

                    <div className="faq__container">
                        <div className="faq__btn--container">
                            {content.map(c => c.items.length > 0 && <FAQButton category={c.category} />)}
                        </div>

                        <div className="faq__category--container">
                            {content.map((category, i) => {
                                return <FAQSection key={i} category={category.category} items={category.items} />
                            })}
                        </div>
                    </div>
                </ContentWrapper>
            </section>
    )
}

export default FAQ;