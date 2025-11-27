const { appUrl } = require("./appUrl");

module.exports = async () => {
    const res = await fetch(`${appUrl}/api/communities`);
    const data = await res.json();
    return data;
}