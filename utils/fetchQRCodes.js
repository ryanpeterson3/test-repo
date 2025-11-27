const { appUrl } = require("./appUrl");

module.exports = async () => {
    const qrCodesUrl = await fetch(`${appUrl}/api/qrCodes`);
    const qrCodesData = await qrCodesUrl.json();
    return qrCodesData;
}