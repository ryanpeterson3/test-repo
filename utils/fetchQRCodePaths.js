const { appUrl } = require("./appUrl");

module.exports = async () => {
    const qrPathsUrl = await fetch(`${appUrl}/api/qrPaths`);
    const qrPathsData = await qrPathsUrl.json();
    return qrPathsData;
}