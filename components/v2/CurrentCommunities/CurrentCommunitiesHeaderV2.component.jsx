import ContentWrapper from "../../../sections/ContentWrapper.component";

const CurrentCommunitiesHeaderV2 = ({ header, copy }) => {
    return (<section className="currentCommunitiesV2 sp">
                <ContentWrapper size="lg">
                    <div className="currentCommunitiesV2__content">
                        <div className="currentCommunitiesV2__header">
                            <h2>{header}</h2>
                        </div>

                        <p className="currentCommunitiesV2__copy">
                            {copy}
                        </p>
                    </div>
            </ContentWrapper>
        </section>)
}

export default CurrentCommunitiesHeaderV2;