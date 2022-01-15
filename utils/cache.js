const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 180 });

module.exports = { cache }