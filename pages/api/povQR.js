const POVRedirect = () => {
    return (
        <p>Redirecting...</p>
    );
}

export async function getServerSideProps(req, res) {
    // const currentLocaleDateString = new Date().toLocaleDateString("en-US", { timeZone: "America/Toronto" });

    // const redirects = [
    //     {
    //         date: "10/30/2025",
    //         redirect: "https://www.google.ca?hee=hee"
    //     },
    //     {
    //         date: "10/29/2025",
    //         redirect: "https://www.google.ca?hoo=hoo"
    //     },
    //     {
    //         date: "11/01/2025",
    //         redirect: "https://www.google.ca?hoo=hoo"
    //     },
    //     {
    //         date: "11/02/2025",
    //         redirect: "https://www.google.ca?hoo=hoo"
    //     },
    //     {
    //         date: "11/03/2025",
    //         redirect: "https://www.google.ca?hoo=hoo"
    //     },
    //     {
    //         date: "11/04/2025",
    //         redirect: "https://www.google.ca?hoo=hoo"
    //     },
    // ];

    // const currentRedirect = redirects.filter(e => e.date === currentLocaleDateString);

    // if (currentRedirect.length === 0) {
    //     return {
    //         redirect: {
    //             destination: '/',
    //             permanent: false,
    //         },
    //     }
    // } else {
    //     return {
    //         redirect: {
    //             destination: '/',
    //             permanent: false,
    //         },
    //     }
    // }
}

export default POVRedirect;