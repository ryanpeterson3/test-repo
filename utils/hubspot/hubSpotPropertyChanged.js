import { apiUrl } from "../apiUrl";

const hubSpotPropertyChanged = async (contactRecord, logStatus) => {
    const { firstname, hs_object_id, hs_lead_status, lifecyclestage, temperature  } = contactRecord.properties;

    const data = { logStatus, firstName: firstname, hubspotId: hs_object_id, leadStatus: hs_lead_status, lifecycleStage: lifecyclestage, temperature };
    const url = `${apiUrl}/hubspot-contacts`;
    const options = {
        method: "POST",
        headers: {
            "Authorization": `bearer ${process.env.NEXT_PUBLIC_LEPINE_ACCESS_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ data })
    };

    const response = await fetch(url, options);

    if (response.status !== 404 && response.status !== 405) {
        return { statusCode: 200, message: "Record update successfully logged!" };
    } else {
        return { statusCode: response.status, error: "Record updated not logged!" };
    }
}

export default hubSpotPropertyChanged;