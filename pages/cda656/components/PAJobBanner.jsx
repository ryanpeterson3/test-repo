const PAJobBanner = () => {
    const indeedUrl = 'https://ca.indeed.com/viewjob?jk=5ebcf83cc8b66d74';
  
    return (
        <a href={indeedUrl} target="_blank" rel="noreferrer" className="premierappliances__jobBanner" id="jobBanner">
            <div className="premierappliances__jobBanner--copy">
                <h3>We&apos;re looking to hire! Click here for more information.</h3>
            </div>
        </a>
    );
}

export default PAJobBanner;