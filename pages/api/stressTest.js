import { apiUrl } from "../../utils/apiUrl";
import { parseStrapiSingleImage } from "../../utils/parseStrapiImages";

export default async function handler(req, res) {
    const stressTestUrl =`${apiUrl}/stress-test?populate=deep`;
    const stressTestRes = await fetch(stressTestUrl);
    const stressTestData = await stressTestRes.json();

    const response = {
        header: stressTestData.data.attributes.header,
        subtitle: stressTestData.data.attributes.subtitle,
        copy: stressTestData.data.attributes.copy,
        btnCopy: stressTestData.data.attributes.btnCopy,
        btnHref: stressTestData.data.attributes.btnHref,
        listHeader: stressTestData.data.attributes.listHeader,
        backgroundImage: parseStrapiSingleImage(stressTestData.data.attributes.backgroundImage),
        image: parseStrapiSingleImage(stressTestData.data.attributes.image),
        list: stressTestData.data.attributes.list.map(item => item.item)
    }

    res.status(200).json(response);
}
  