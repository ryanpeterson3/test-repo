import { GoogleAdsApi } from "google-ads-api";

export default async function handler(req, res) {
    if (req.headers.authorization === process.env.NEXT_PUBLIC_LEPINE_MARKETING_DASHBOARD_AUTH) {
        // Destructure requested year from the request query and parse it as a number
        const requestedYear = parseInt(req.query.year);

        // Define acceptable years as numbers. Future years are included to allow future querying but will return an error until the currentYear variable returns an equal value
        const acceptedYears = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

        // Define current epoch, current date string and current year
        const currentEpoch = Date.now();
        const currentDate = new Date(currentEpoch);
        const currentYear = currentDate.getFullYear();

        // Check if requested year is greater than the current year, return an error if so
        if (requestedYear > currentYear) return res.status(400).json({ error: `${requestedYear} is not an acceptable year, you cannot see into the future.` });

        // Return an error if the requested year is not found in the array of acceptable years
        if (!acceptedYears.includes(requestedYear)) return res.status(400).json({ error: `${requestedYear} is not an acceptable year.` });

        try {    
            const client = new GoogleAdsApi({
                client_id: process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID,
                client_secret: process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_SECRET,
                developer_token: process.env.NEXT_PUBLIC_GOOGLE_ADS_DEVELOPER_TOKEN,
              });
        
              const customer = client.Customer({
                customer_id: process.env.NEXT_PUBLIC_GOOGLE_ADS_CUSTOMER_ID,
                login_customer_id: process.env.NEXT_PUBLIC_GOOGLE_ADS_LOGIN_CUSTOMER_ID,
                refresh_token: process.env.NEXT_PUBLIC_GOOGLE_ADS_REFRESH_TOKEN,
              });
        
              const campaigns = await customer.report({
                entity: "campaign",
                attributes: [
                    "campaign.name",
                    "campaign.campaign_budget",
                    "campaign.status",
                    "campaign.start_date",
                    "campaign.end_date",
                ],
                metrics: [
                    "metrics.impressions",
                    "metrics.average_cpv",
                    "metrics.clicks",
                    "metrics.average_cost",
                    "metrics.ctr",
                    "metrics.average_cpc",
                    "metrics.average_cpm",
                    "metrics.cost_micros",
                    "metrics.conversions"
                ],
                order: [
                    { field: "segments.date", sort_order: "DESC" },
                ],
                segments: ["segments.date"],
                from_date: `${requestedYear}-01-01`,
                to_date: `${requestedYear}-12-31`,
            });
    
            return res.status(200).json(campaigns);
        } catch (error) {
            return res.status(400).json(error);
        }
    } else {
        return res.status(400).json({ message: 'Forbidden' })
    }
}

