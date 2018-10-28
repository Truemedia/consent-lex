const yesNoWords = require('yes-no-words');
const {Lexeme, Lexicon} = require('lemme-lex');

let consentTags = ['Consent'];
let refusalTags = ['Refusal'];

let lex = new Lexicon();

/**
  * Consolidated sources
  */
let lexemes = [].concat( yesNoWords.yes.map(phrase => new Lexeme(phrase, consentTags)) ) // Yes words (author sourced)
                .concat( yesNoWords.no.map(phrase => new Lexeme(phrase, refusalTags)) ); // No words (author sourced)

lex.addEntries(lexemes);
module.exports = lex;
