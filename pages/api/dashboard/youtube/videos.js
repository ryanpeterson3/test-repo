import qs from 'qs';

export default async function handler(req, res) {
    if (req.headers.authorization) {
        const query = qs.stringify({
            key: req.headers.authorization,
            maxResults: 50,
            order: 'date',
            channelId: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID
        });

        const url = `https://www.googleapis.com/youtube/v3/search?${query}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            return res.status(data.error.code).json({ message: data.error.message });
        } else {
            const videoIds = data.items.map(v => v.id.videoId && v.id.videoId);
            
            const videoQuery = qs.stringify({
                key: req.headers.authorization,
                id: videoIds.join(','),
                part: 'id,snippet,statistics,contentDetails',
            });
    
            const videosUrl = `https://www.googleapis.com/youtube/v3/videos?${videoQuery}`;
            const videosResponse = await fetch(videosUrl);
            const videosData = await videosResponse.json();

            return res.status(200).json(videosData);
        }
    } else {
        return res.status(403).json({ message: 'Forbidden' })
    }
}