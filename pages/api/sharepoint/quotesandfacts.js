export default async function handler(req, res) {
    const mode = req.query.mode ? req.query.mode : 'quoteoftheday';

    let url;

    switch (mode) {
        case 'quoteoftheday':
            url = 'https://api.viewbits.com/v1/zenquotes?mode=today';
            break;

        case 'randomquote':
            url = 'https://api.viewbits.com/v1/zenquotes?mode=random';
            break;

        case 'onthisday':
            url = 'https://api.viewbits.com/v1/onthisday';
            break;

        case 'lifehacks':
            url = 'https://api.viewbits.com/v1/lifehacks?mode=today';
            break;

        case 'headlines':
            url = 'https://api.viewbits.com/v1/headlines';
            break;

        case 'famousbirthdays':
            url = 'https://www.onthisday.com/rss/famous-birthdays.xml';
            break;

        case 'todayinhistory':
            url = 'https://www.onthisday.com/rss/today-in-history.xml';
            break;

        case 'historicalevents':
            url = 'https://www.onthisday.com/rss/historical-events.xml';
            break;
    
        default:
            url = 'https://zenquotes.io/api/today';
            break;
    }

    const response = await fetch(url);
    const data = await response.json();
    return res.status(200).json({
        mode,
        data
    });
}
  
