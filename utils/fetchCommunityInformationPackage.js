const { appUrl } = require("./appUrl");

module.exports = async (id) => {
    const url = `${appUrl}/api/communityInformationPackage`;
    const res = await fetch(url);
    const data = await res.json();

    const themeImages = data.themeImages.filter(item => item.param === id)[0] || null;

    const response = {
        ...data,
        property: themeImages
    };

    return response;
}