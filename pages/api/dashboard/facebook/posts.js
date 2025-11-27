import qs from 'qs';

const wait = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

export default async function handler(req, res) {
if (req.headers.authorization === process.env.NEXT_PUBLIC_LEPINE_MARKETING_DASHBOARD_AUTH) {
        try {
            const postFields = [
                'id',
                'created_time',
                'message',
                'is_popular',
                'permalink_url',
                'attachments{media}',
                'shares',
                `insights.metric(
                    post_impressions,
                    post_impressions_paid,
                    post_impressions_unique,
                    post_reactions_by_type_total,
                    post_video_avg_time_watched,
                    post_video_views,
                    post_video_view_time,
                    post_clicks_by_type
                )`
            ];

            const postsQuery = qs.stringify({
                access_token: process.env.NEXT_PUBLIC_FACEBOOK_POSTS_LONG_LIVED_PAGE_TOKEN,
                fields: postFields.join(',').replace(/\s/g, ''),
                limit: 50
            });

            const postsUrl = `https://graph.facebook.com/v22.0/101886242834304/posts?${postsQuery}`;
            const postsResponse = await fetch(postsUrl);
            const postsData = await postsResponse.json();

            return res.status(200).json(postsData);
        } catch (error) {
            return res.status(400).json(error)
        }
    } else {
        return res.status(403).json({ message: 'Forbidden' })
    }
}