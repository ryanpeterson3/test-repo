const wait = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

export default async function handler(req, res) {
    if (req.headers.authorization) {
        let after = 0;
        let allPagesQueried = false;

        let emailsResponse = {};

        const options = {
            headers: {
                "Authorization": `Bearer ${req.headers.authorization}`,
                "Content-Type": "application/json"
            },
            method: "GET"
        };

        try {
            const url = `https://api.hubapi.com/marketing/v3/emails?limit=100`;
            const response = await fetch(url, options);
            const data = await response.json();

            emailsResponse.total = data.total;
            emailsResponse.results = data.results;

            if (!data.paging?.next?.after) {
                after = 0;
                allPagesQueried = true;
            } else {
                after = data.paging?.next?.after;
            }

            while (!allPagesQueried) {
                if (after !== null) {
                    await wait(500);

                    const url = `https://api.hubapi.com/marketing/v3/emails?limit=100&after=${after}`;
                    const response = await fetch(url, options);
                    const data = await response.json();
                    data.results.forEach(item => emailsResponse.results.push(item));

                    if (!data.paging?.next?.after) {
                        after = null;
                        allPagesQueried = true;
                    } else {
                        after = data.paging?.next?.after;
                    }
                }
            }

            return res.status(200).json(emailsResponse);
        } catch (error) {
            return res.status(400).json(error)
        }
    } else {
        return res.status(403).json({ message: 'Forbidden' })
    }
}