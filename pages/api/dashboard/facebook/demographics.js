import qs from 'qs';

const wait = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

export default async function handler(req, res) {
    if (req.headers.authorization === process.env.NEXT_PUBLIC_LEPINE_MARKETING_DASHBOARD_AUTH) {
        try {
            const pageFields = [
                'page_fans_locale',
                'page_fans_city',
                'page_fans_country'
            ];
    
            const pageFieldsQs = pageFields.join(',').replace(/\s/g, '');
    
            const pageQuery = qs.stringify({
                access_token: process.env.NEXT_PUBLIC_FACEBOOK_POSTS_LONG_LIVED_PAGE_TOKEN,
                metric: pageFieldsQs,
            });

            const pageUrl = `https://graph.facebook.com/v22.0/101886242834304/insights?${pageQuery}`;
            const pageResponse = await fetch(pageUrl);
            const pageData = await pageResponse.json();

            return res.status(200).json(pageData);
        } catch (error) {
            return res.status(400).json(error)
        }
    } else {
        return res.status(403).json({ message: 'Forbidden' })
    }
}