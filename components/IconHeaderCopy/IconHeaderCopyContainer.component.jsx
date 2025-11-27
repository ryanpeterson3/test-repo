import ContentWrapper from "../../sections/ContentWrapper.component";
import IconHeaderCopy from "./IconHeaderCopy.component";
import Link from 'next/link';

const IconHeaderCopyContainer = ({ id, content }) => {
    const { header, copy, items, link } = content;


    const renderLink = () => {
        if (link.type === 'internal') {
            return <Link className="btn" href={link.href}>{link.copy}</Link>
        } else {
            return <a className="btn" target="_blank" rel="noreferrer" href={link.href}>{link.copy}</a>
        }
    }

    return (
        <ContentWrapper size="xl">
            {/* {header && <h2>{header}</h2>}
            {copy && <h2>{copy}</h2>}

            {items.map(item => {
                const { icon, header, copy } = item;
                <IconHeaderCopy icon={icon} header={header} copy={copy} />
            })}

            {link && renderLink()} */}
        </ContentWrapper>
    )
}

export default IconHeaderCopyContainer;