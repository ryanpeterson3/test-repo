import ContentWrapper from "../sections/ContentWrapper.component";

const LeasingSteps = ({ steps }) => {
    return (
        <div className="leasingSteps">     
            <ContentWrapper cssClass="leasingSteps__item themeLeasingStep">
                <div className="leasingSteps__item--wrapper">
                    <h3>Step One</h3>
                    <p>{steps.stepOne}</p>
                </div>
            </ContentWrapper>
            <ContentWrapper cssClass="leasingSteps__item themeLeasingStep">
                <div className="leasingSteps__item--wrapper">
                    <h3>Step Two</h3>
                    <p>{steps.stepTwo}</p>
                </div>
            </ContentWrapper>
            <ContentWrapper cssClass="leasingSteps__item themeLeasingStep">
                <div className="leasingSteps__item--wrapper">
                    <h3>Step Three</h3>
                    <p>{steps.stepThree}</p>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default LeasingSteps;