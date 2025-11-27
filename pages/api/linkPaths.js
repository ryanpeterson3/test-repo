import { apiUrl } from "../../utils/apiUrl";
import { populate } from "../../utils/populate";

export default async function handler(req, res) {
  const linkCodesUrl = `${apiUrl}/link-codes?${populate}`;
  const linkCodeRes = await fetch(linkCodesUrl);
  const linkCodesData = await linkCodeRes.json();

    const linkPaths = linkCodesData.data.map(link => {
        const { code } = link.attributes;
        return {
            params: { code }
        };
    });
  
    return res.status(200).json(linkPaths);
}