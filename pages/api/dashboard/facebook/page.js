import qs from 'qs';

const wait = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

export default async function handler(req, res) {
    if (req.headers.authorization === process.env.NEXT_PUBLIC_LEPINE_MARKETING_DASHBOARD_AUTH) {
        try {
            const pageFields = [
                'page_total_actions',
    
                'page_post_engagements',
                // 'page_daily_follows',
                // 'page_daily_follows_unique',
                // 'page_daily_unfollows_unique',
                'page_follows',
    
                'page_impressions',
                'page_impressions_unique',
                'page_impressions_paid',
                'page_impressions_paid_unique',
                'page_impressions_viral',
                'page_impressions_viral_unique',
                'page_impressions_nonviral',
                'page_impressions_nonviral_unique',
                
                'page_posts_impressions',
                'page_posts_impressions_unique',
                'page_posts_impressions_paid',
                'page_posts_impressions_paid_unique',
                'page_posts_impressions_organic_unique',
                'page_posts_served_impressions_organic_unique',
                'page_posts_impressions_viral',
                'page_posts_impressions_viral_unique',
                'page_posts_impressions_nonviral',
                'page_posts_impressions_nonviral_unique',
    
                'post_clicks',
                'post_clicks_by_type',
    
                'post_impressions',
                'post_impressions_unique',
                'post_impressions_paid',
                'post_impressions_paid_unique',
                'post_impressions_fan',
                'post_impressions_fan_unique',
                'post_impressions_organic',
                'post_impressions_organic_unique',
                // 'post_impressions_viral',
                // 'post_impressions_viral_unique',
                // 'post_impressions_nonviral',
                // 'post_impressions_nonviral_unique',
    
                // 'post_reactions_like_total',
                // 'post_reactions_love_total',
                // 'post_reactions_wow_total',
                // 'post_reactions_haha_total',
                // 'post_reactions_sorry_total',
                // 'post_reactions_anger_total',
                'post_reactions_by_type_total',
    
                'page_fans',
    
                // 'page_fans_by_like_source',
                // 'page_fans_by_like_source_unique',
    
                'page_video_views',
                // 'page_video_views_by_uploaded_hosted',
                'page_video_views_paid',
                'page_video_views_organic',
                // 'page_video_views_by_paid_non_paid',
                // 'page_video_views_autoplayed',
                // 'page_video_views_click_to_play',
                // 'page_video_views_unique',
                // 'page_video_repeat_views',
                'page_video_complete_views_30s',
                'page_video_complete_views_30s_paid',
                'page_video_complete_views_30s_organic',
                // 'page_video_complete_views_30s_autoplayed',
                // 'page_video_complete_views_30s_click_to_play',
                // 'page_video_complete_views_30s_unique',
                // 'page_video_complete_views_30s_repeat_views',
                // 'post_video_complete_views_30s_autoplayed',
                // 'post_video_complete_views_30s_clicked_to_play',
                // 'post_video_complete_views_30s_organic',
                // 'post_video_complete_views_30s_paid',
                // 'post_video_complete_views_30s_unique',
                'page_video_view_time',
                // 'page_uploaded_3s_to_15s_views_rate',
                // 'page_uploaded_views_15s_count',
    
                'page_views_total'
    
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