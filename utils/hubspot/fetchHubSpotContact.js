const fetchHubSpotContact = async (contactId) => {
    if (contactId) {
        // If there is a contactId
        try {
            const params = '?properties=firstname,lastname,lifecyclestage,hs_lead_status,email,hs_object_id,temperature';
            const url = `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}${params}`;
            const options = {
                headers: {
                    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_HUBSPOT_CONNECTOR_KEY}`,
                    "Content-Type": "application/json"
                },
                method: "GET"
            }
            
            const response = await fetch(url, options);
            const data = await response.json();
            return data;
        } catch (error) {
            return null;
        }
    } else {
        // If there is no contactId
        return null;
    }
}

export default fetchHubSpotContact;