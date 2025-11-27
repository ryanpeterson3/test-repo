import { apiUrl } from "./apiUrl";
import { appUrl } from "./appUrl";
import { baseUrl } from "./baseUrl";
import { populate } from "./populate";

module.exports = async () => {
    const blogUrl = `${apiUrl}/slugs`;
    const blogRes = await fetch(blogUrl);
    const blogData = await blogRes.json();

    return blogData;
}