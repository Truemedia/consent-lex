#! /usr/bin/env node
const yargs = require('yargs')
    .usage("consent-lex --locale=en_GB")
    .option('locale', {
      "alias": "l",
      "default": "en_GB",
      "describe": "Localisation (ISO code)",
      "type": "string"
    })
    .help('h')
    .alias('h', 'help');
const ConsentLex = require('./index');

let {locale} = yargs.argv;
let lex = new ConsentLex(locale);
let filename = 'consent.txt';
let dest = `${locale}/${filename}`;
lex.toFile(dest);
console.log(`saved file: ${dest}`);
