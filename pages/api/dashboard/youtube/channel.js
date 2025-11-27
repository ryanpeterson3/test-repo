import qs from 'qs';

export default async function handler(req, res) {
    if (req.headers.authorization) {
        const query = qs.stringify({
            key: req.headers.authorization,
            part: 'status,snippet,statistics,contentOwnerDetails,contentDetails',
            id: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID
        });

        const url = `https://www.googleapis.com/youtube/v3/channels?${query}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            return res.status(data.error.code).json({ message: data.error.message });
        } else {
            return res.status(200).json(data);
        }
    } else {
        return res.status(403).json({ message: 'Forbidden' })
    }
}