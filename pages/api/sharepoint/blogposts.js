import { apiUrl } from "../../../utils/apiUrl";
import { baseUrl } from "../../../utils/baseUrl";
import qs from "qs";

export default async function handler(req, res) {

  const query = qs.stringify({
      publicationState: 'live',
      fields: ['title', 'date', 'preview', 'slug'],
      populate: ['properties.pageId', 'categories.name', 'images.thumbnail', 'meta.description', 'meta.keywords'],
      encodeValuesOnly: true
  });

  const blogUrl = `${apiUrl}/blogs?${query}`;
  const blogRes = await fetch(blogUrl);
  const blogData = await blogRes.json();

    const posts = blogData.data.map(post => {
      const { title, date, slug, images } = post.attributes;

      const { thumbnail } = images;

      const thbn = baseUrl(thumbnail.data.attributes.url);

      return {
        title,
        lastModifiedDateTime: date,
        webUrl: `https://www.lepineapartments.com/newsroom/${slug}`,
        thumbnailWebUrl: thbn
      }
    });

    res.setHeader('Access-Control-Allow-Origin', 'https://lepinegroup.sharepoint.com');
    return res.status(200).json(posts);
}