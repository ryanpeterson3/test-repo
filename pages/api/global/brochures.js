import { apiUrl } from "../../../utils/apiUrl";
import { baseUrl } from "../../../utils/baseUrl";

export default async function handler(req, res) {
    const url = `${apiUrl}/brochures?populate=deep`;
    const response = await fetch(url);
    const data = await response.json();

    const brochures = data.data.map(b => {
        const { subtitle, copy, list, title, btnCopy, header, image, pdf } = b.attributes;

        const imageUrl = baseUrl(image.data.attributes.url);
        const pdfUrl = baseUrl(pdf.data.attributes.url);

        return {
            id: b.id,
            subtitle,
            copy,
            list,
            title,
            btnCopy,
            header,
            image: imageUrl,
            pdf: pdfUrl
        }
    })

    return res.status(200).json(brochures);
}

