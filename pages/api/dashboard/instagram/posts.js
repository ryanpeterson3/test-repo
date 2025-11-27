import qs from 'qs';

const wait = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

export default async function handler(req, res) {
    if (req.headers.authorization === process.env.NEXT_PUBLIC_LEPINE_MARKETING_DASHBOARD_AUTH) {
        const fields = [
            `media.limit(50) {
                caption,
                cover_url,
                image_url,
                like_count,
                media_url,
                comments_count,
                permalink,
                timestamp,
                comments {
                    like_count,
                    text
                },
                insights.metric(
                    comments,
                    follows,
                    ig_reels_avg_watch_time,
                    ig_reels_video_view_total_time,
                    likes,
                    navigation,
                    profile_activity,
                    profile_visits,
                    reach,
                    saved,
                    shares,
                    total_interactions,
                    views,
                )
            }`
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
            return res.status(200).json(data.media.data);
        } catch (error) {
            return res.status(400).json(error)
        }
    } else {
        return res.status(403).json({ message: 'Forbidden' })
    }
}