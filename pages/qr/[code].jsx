import fetchQRCodes from "../../utils/fetchQRCodes";

const QRCodeRedirect = () => {
    return (
        <p>Redirecting...</p>
    )
}

export async function getServerSideProps(req, res) {
    const code = req.params.code;
    const qrCodes = await fetchQRCodes();
    const qrCode = qrCodes.filter(qr => qr.code.toLowerCase() === code.toLowerCase());

    if (qrCode.length === 0) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    } else {
        return {
            redirect: {
                destination: qrCode[0].url,
                permanent: false,
            },
        }
    }
}


export default QRCodeRedirect;