const { appUrl } = require("./appUrl");

module.exports = async () => {
    const linkCodesUrl = await fetch(`${appUrl}/api/linkCodes`);
    const linkCodesData = await linkCodesUrl.json();
    return linkCodesData;
}