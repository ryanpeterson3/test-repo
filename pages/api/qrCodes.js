import { apiUrl } from "../../utils/apiUrl";
import { baseUrl } from "../../utils/baseUrl";
import { populate } from "../../utils/populate";

export default async function handler(req, res) {
  const qrCodesUrl = `${apiUrl}/qr-codes?${populate}`;
  const qrCodeRes = await fetch(qrCodesUrl);
  const qrCodesData = await qrCodeRes.json();

    const qrCodes = qrCodesData.data.map(qr => {
        const { code, url } = qr.attributes;
        return {
            code, url
        };
    });
  
    return res.status(200).json(qrCodes);
}