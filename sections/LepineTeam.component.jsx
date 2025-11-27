import Link from "next/link";
import { pageIsActive } from "../utils/pageIsActive";
import ContentWrapper from "./ContentWrapper.component";

const LepineTeam = ({ content }) => {
    let { header, copy } = content;

    return (
        <section className="lepineTeam sp">
           <ContentWrapper size="sm">
                <h2 className="lepineTeam__header">
                    {header}
                </h2>

                <p className="lepineTeam__copy rt copyPadding">
                    {copy}
                </p>

                {pageIsActive.about && <Link href="/about">
                    <div className="btn">Read More</div>
                </Link>}
           </ContentWrapper>
        </section>
    )
}

export default LepineTeam;