import { apiUrl } from "../apiUrl";

const hubspotContactCreated = async (contactRecord) => {
    const { firstname, hs_object_id } = contactRecord.properties;

    const data = { logStatus: "Contact Created", firstName: firstname, hubspotId: hs_object_id };
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
        return { statusCode: 200, message: "Record log successfully created!" };
    } else {
        return { statusCode: response.status, error: "Record log not created!" };
    }
}

export default hubspotContactCreated;