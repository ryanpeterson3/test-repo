import qs from 'qs';

const wait = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

export default async function handler(req, res) {
    if (req.headers.authorization === process.env.NEXT_PUBLIC_LEPINE_MARKETING_DASHBOARD_AUTH) {
        const fields = [
            'biography',
            'followers_count',
            'follows_count',
            'media_count',
            'name',
            'profile_picture_url',
            'username',
        ];

        const fieldsQs = fields.join(',').replace(/\s/g, '');

        const query = qs.stringify({
            access_token: process.env.NEXT_PUBLIC_INSTAGRAM_APP_TOKEN,
            fields: fieldsQs,
        });

        try {
            const url = `https://graph.facebook.com/v22.0/17841459889872075?${query}`;
            const response = await fetch(url);
            const data = await response.json();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error)
        }
    } else {
        return res.status(403).json({ message: 'Forbidden' })
    }
}