const { appUrl } = require("./appUrl");

module.exports = async () => {
    const propertySuitesRes = await fetch(`${appUrl}/api/propertySuite`);
    const propertySuitesData = await propertySuitesRes.json();
    return propertySuitesData;
}