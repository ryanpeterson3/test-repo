import ContentWrapper from "./ContentWrapper.component"

const CurrentCommunitiesHeader = ({ header, copy }) => {
    return (<section className="currentCommunities sp">
                <ContentWrapper size="lg">
                    <div className="currentCommunities__content">
                        <h2 className="currentCommunities__header">
                            {header}
                        </h2>

                        <p className="currentCommunities__copy copyPadding">
                            {copy}
                        </p>
                    </div>
            </ContentWrapper>
        </section>)
}

export default CurrentCommunitiesHeader;