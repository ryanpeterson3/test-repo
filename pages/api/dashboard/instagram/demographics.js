import qs from 'qs';

const wait = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

export default async function handler(req, res) {
    if (req.headers.authorization === process.env.NEXT_PUBLIC_LEPINE_MARKETING_DASHBOARD_AUTH) {
        const breakdowns = ['age', 'city', 'country', 'gender'];
        const promiseUrls = breakdowns.map(b => {
            const query = qs.stringify({
                access_token: process.env.NEXT_PUBLIC_INSTAGRAM_APP_TOKEN,
                metric: 'follower_demographics',
                period: 'lifetime',
                metric_type: 'total_value',
                breakdown: b
            });
        
            return {
                id: b,
                url: `https://graph.facebook.com/v22.0/17841459889872075/insights?${query}`
            }
        });

        const response = await Promise.all(promiseUrls.map(b => (
            fetch(b.url)
                .then(response => response.json())
                .then(data => data.data[0])
        )));

        return res.status(200).json(response);
    } else {
        return res.status(403).json({ message: 'Forbidden' })
    }
}