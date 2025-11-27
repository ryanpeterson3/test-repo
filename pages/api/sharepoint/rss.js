const axios = require('axios');
const { parseString } = require('xml2js');

export default async function handler(req, res) {
    const mode = req.query.mode ? req.query.mode : 'wordoftheday';
    let url;
    let content = {
        mode
    };

    // Assign Axios URL based on mode variable
    switch (mode) {
        case 'wordoftheday':
            url = 'https://www.merriam-webster.com/wotd/feed/rss2';
            break;

        case 'quoteoftheday':
            url = 'https://www.brainyquote.com/link/quotebr.rss';
            break;
            
        case 'apartmenttherapy':
            url = 'https://www.apartmenttherapy.com/main.rss';
            break;

        case 'entrepreneur':
            url = 'https://www.entrepreneur.com/latest.rss';
            break;

        case 'cbctopstories':
            url = 'https://www.cbc.ca/webfeed/rss/rss-topstories';
            break;

        case 'cbcottawa':
            url = 'https://www.cbc.ca/webfeed/rss/rss-canada-ottawa';
            break;

        case 'cbcworld':
            url = 'https://www.cbc.ca/webfeed/rss/rss-world';
            break;

        case 'cbccanada':
            url = 'https://www.cbc.ca/webfeed/rss/rss-canada';
            break;

        case 'cbcbusiness':
            url = 'https://www.cbc.ca/webfeed/rss/rss-business';
            break;

        case 'cbctechnology':
            url = 'https://www.cbc.ca/webfeed/rss/rss-technology';
            break;

        case 'cbcsports':
            url = 'https://www.cbc.ca/webfeed/rss/rss-sports';
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
            url = 'https://www.brainyquote.com/link/quotebr.rss';
            break;
    }

    // Fetch Axios URL
    try {
        const response = await axios.get(url);
    
        const result = await new Promise((resolve, reject) => {
          parseString(response.data, { explicitArray: false }, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });

        switch (mode) {
            case 'wordoftheday':
                content.source = result.rss.channel.title;
                content.title = result.rss.channel.item[0].title;
                content.body = result.rss.channel.item[0].description;
                content.link = result.rss.channel.item[0].link;
                break;
    
            case 'quoteoftheday':
                content.source = result.rss.channel.title;
                content.body = result.rss.channel.item[0].title;
                content.title = result.rss.channel.item[0].description;
                content.link = result.rss.channel.item[0].link;
                break;
                
            case 'apartmenttherapy':
                content.source = result.rss.channel.title;
                content.title = result.rss.channel.item[0].title;
                content.body = result.rss.channel.item[0].description;
                content.link = result.rss.channel.item[0].link;
                break;
    
            case 'entrepreneur':
                content.source = result.rss.channel.title;
                content.title = result.rss.channel.item[0].title;
                content.body = result.rss.channel.item[0].description;
                content.link = result.rss.channel.item[0].link;
                break;
    
            case 'cbctopstories':
                content.source = result.rss.channel.title;
                content.title = result.rss.channel.item[0].title;
                content.body = result.rss.channel.item[0].description;
                content.link = result.rss.channel.item[0].link;
                break;
    
            case 'cbcottawa':
                content.source = result.rss.channel.title;
                content.title = result.rss.channel.item[0].title;
                content.body = result.rss.channel.item[0].description;
                content.link = result.rss.channel.item[0].link;
                break;
    
            case 'cbcworld':
                content.source = result.rss.channel.title;
                content.title = result.rss.channel.item[0].title;
                content.body = result.rss.channel.item[0].description;
                content.link = result.rss.channel.item[0].link;
                break;
    
            case 'cbccanada':
                content.source = result.rss.channel.title;
                content.title = result.rss.channel.item[0].title;
                content.body = result.rss.channel.item[0].description;
                content.link = result.rss.channel.item[0].link;
                break;
    
            case 'cbcbusiness':
                content.source = result.rss.channel.title;
                content.title = result.rss.channel.item[0].title;
                content.body = result.rss.channel.item[0].description;
                content.link = result.rss.channel.item[0].link;
                break;
    
            case 'cbctechnology':
                content.source = result.rss.channel.title;
                content.title = result.rss.channel.item[0].title;
                content.body = result.rss.channel.item[0].description;
                content.link = result.rss.channel.item[0].link;
                break;
    
            case 'cbcsports':
                content.source = result.rss.channel.title;
                content.title = result.rss.channel.item[0].title;
                content.body = result.rss.channel.item[0].description;
                content.link = result.rss.channel.item[0].link;
                break;
    
            case 'famousbirthdays':
                content.source = result.rss.channel.title;
                content.title = result.rss.channel.item.title;
                content.body = result.rss.channel.item.description;
                content.link = result.rss.channel.item.link;
                break;
    
            case 'todayinhistory':
                content.source = result.rss.channel.title;
                content.title = result.rss.channel.item.title;
                content.body = result.rss.channel.item.description;
                content.link = result.rss.channel.item.link;
                break;
    
            case 'historicalevents':
                content.source = result.rss.channel.title;
                content.title = result.rss.channel.item.title;
                content.body = result.rss.channel.item.description;
                content.link = result.rss.channel.item.link;
                break;
        
            default:
                content.source = result.rss.channel.title;
                content.title = result.rss.channel.item[0].title;
                content.body = result.rss.channel.item[0].description;
                content.link = result.rss.channel.item[0].link;
                break;
        }

        res.setHeader('Access-Control-Allow-Origin', 'https://lepinegroup.sharepoint.com');
        return res.status(200).json({
            content,
            rss: result.rss.channel
        });
      } catch (error) {
        return res.status(400).json('Something went wrong!');
      }
}