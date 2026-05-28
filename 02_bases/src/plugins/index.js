const { getUuidv } = require('../plugins/get-uuidv-plugin');
const {getAge} = require('../plugins/get-age-plugin');
const {httpClient} = require('../plugins/http-client');
const buildLogger = require('../plugins/logger.plugin');

module.exports = {getAge,
    getUuidv,
    httpClient,
    buildLogger
}