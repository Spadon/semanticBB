var uuid = require('uuid/v4');

/**
 * Generates an UUID
 */
const generate = (baseURI) => {
    return `${baseURI}/${uuid()}`
}

modules.exports = {
    generate
}