import { apiUrl } from "../../utils/apiUrl";
import { parseStrapiSingleImage } from "../../utils/parseStrapiImages";


export default async function handler(req, res) {
    const communityInformationPackageUrl = `${apiUrl}/community-information-package?populate=deep`;
    const communityInformationPackageRes = await fetch(communityInformationPackageUrl);
    const communityInformationPackageData = await communityInformationPackageRes.json();

    const { header, formId, portalId, goalName, themeImages } = communityInformationPackageData.data.attributes;

    const themeImagesResponse = themeImages.map(item => {
        return {
            param: item.param,
            headerImage: parseStrapiSingleImage(item.headerImage),
            formImage: parseStrapiSingleImage(item.formImage),
            header: item.header,
            btnCopy: item.btnCopy
        }
    })

    const response = {
        header,
        formId,
        goalName,
        portalId,
        themeImages: themeImagesResponse
    }

    res.status(200).json(response);
}
  
