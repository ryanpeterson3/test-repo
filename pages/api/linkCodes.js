import { apiUrl } from "../../utils/apiUrl";
import { baseUrl } from "../../utils/baseUrl";
import { populate } from "../../utils/populate";

export default async function handler(req, res) {
  const linkCodesUrl = `${apiUrl}/link-codes?${populate}`;
  const linkCodeRes = await fetch(linkCodesUrl);
  const linkCodesData = await linkCodeRes.json();

    const linkCodes = linkCodesData.data.map(link => {
        const { code, url } = link.attributes;
        return {
            code, url
        };
    });
  
    return res.status(200).json(linkCodes);
}