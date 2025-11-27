import qs from 'qs';

const wait = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

export default async function handler(req, res) {
    if (req.headers.authorization) {
        const options = {
            headers: {
                "Authorization": `Bearer ${req.headers.authorization}`,
                "Content-Type": "application/json"
            },
            method: "GET"
        };

        const query = qs.stringify({
            startTimestamp: '2023-01-01',
            endTimestamp: '2033-01-01',
        });

        try {
            const url = `https://api.hubapi.com/marketing/v3/emails/statistics/list?${query}`;
            const response = await fetch(url, options);
            const data = await response.json();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error)
        }
    } else {
        return res.status(403).json({ message: 'Forbidden' })
    }
}