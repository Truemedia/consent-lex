# consent-lex
A lexicon for giving or declining consent (yes and no)

This module can be used as both a function and via the command line

As a module it exports a Lexicon instance using the package [Lemme lex](https://www.npmjs.com/package/lemme-lex)

## Supported languages
* English (British)
* Japanese
(Fork and commit if you would like to contribute to the list)

## Installation

NPM
```bash
    npm i --save consent-lex
```

Yarn
```bash
    yarn add consent-lex
```

CLI
```bash
  npm i -g salutation-lex
```

## Usage

### Code
```js
const ConsentLex = require('consent-lex');
let lex = new ConsentLex();
console.log(lex); // Will output class instance using lemme-lex
```

### CLI
```bash
  consent-lex --locale=en_GB
```
(Will output lexicon as text file called consent.txt)
