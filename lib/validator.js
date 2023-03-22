'use strict'
const {Buffer} = require('buffer');

/**
 * @private
 * @param {any} value
 * @returns {boolean}
 */
function isEthAddress(value) {
    return (value instanceof Buffer) && (value.length === 20)
}

module.exports = {
    isEthAddress
}
