import { apiUrl } from "../../utils/apiUrl";
import { populate } from "../../utils/populate";

export default async function handler(req, res) {
  const qrCodesUrl = `${apiUrl}/qr-codes?${populate}`;
  const qrCodeRes = await fetch(qrCodesUrl);
  const qrCodesData = await qrCodeRes.json();

    const qrPaths = qrCodesData.data.map(qr => {
        const { code } = qr.attributes;
        return {
            params: { code }
        };
    });
  
    return res.status(200).json(qrPaths);
}