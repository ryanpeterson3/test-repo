const { appUrl } = require("./appUrl");

module.exports = async () => {
    const stressTestRes = await fetch(`${appUrl}/api/stressTest`);
    const stressTestData = await stressTestRes.json();
    return stressTestData;
}