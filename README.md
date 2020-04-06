# Lacinka
> Lacinka is a NPM module for converting Belarusian text to traditional belarusian latin text. The big problem of other converters for the Belarusian Latin is the omission of several rules.

## Installation
To use this module, you must have Node.js and NPM installed.
Use you terminal for installing:

```shell
npm install lacinka --save
```

## toLacinka
Simple usage of toLacinka:
```javascript
const { toLacinka } = require('lacinka'); // importing

console.log(toLacinka('Витаньне, Сьвет!!!')) // => Vitańnie, Śviet!!!
```

## toURL
Simple usage of toURL:
```javascript
const { toURL } = require('lacinka'); // importing

console.log(toURL('Витаньне, Сьвет!!!')) // => vitannie_sviet
```