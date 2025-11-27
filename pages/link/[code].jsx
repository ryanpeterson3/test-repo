import fetchLinkCodes from "../../utils/fetchLinkCodes";

const LinkCodeRedirect = () => {
    return (
        <p>Redirecting...</p>
    )
}

export async function getServerSideProps(req, res) {
    const code = req.params.code;
    const linkCodes = await fetchLinkCodes();
    const linkCode = linkCodes.filter(link => link.code.toLowerCase() === code.toLowerCase());

    if (linkCode.length === 0) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    } else {
        return {
            redirect: {
                destination: linkCode[0].url,
                permanent: false,
            },
        }
    }
}


export default LinkCodeRedirect;