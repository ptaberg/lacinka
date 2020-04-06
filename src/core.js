// UTILS
const converter = require('./utils/convert.util')
const symbolsDeleter = require('./utils/antisymbols.util')
const spacify = require('./utils/spacify.util')

// MAPPINGS
const mapLacinka = require('./maps/lacinka.map')
const mapURL = require('./maps/url.map')

// CONVENTERS
const toLacinka = text => converter(text, mapLacinka)
const toURL = text => {
    let url = symbolsDeleter(converter(text.toLowerCase(), mapURL))
    return spacify(url)
}

module.exports = {
    toLacinka,
    toURL
}