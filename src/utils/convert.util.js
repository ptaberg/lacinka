const lacinkaMap = require("../maps/lacinka.map")

const converter = (text, mapping) => {
  mapping.forEach(char => {
    text = text.replace(char[0], char[1])
  })

  return text
}

module.exports = converter
