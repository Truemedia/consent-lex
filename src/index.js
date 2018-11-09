const yesNoWords = require('yes-no-words');
const {Lexeme, Lexicon} = require('lemme-lex');

// Translations
const yesWords = require('./data/ja_JP/yes.json');
const noWords = require('./data/ja_JP/no.json');

let consentTags = ['Consent'];
let refusalTags = ['Refusal'];

/**
  * Consolidated sources
  */
let lexemes = {
  'en_GB': [].concat( yesNoWords.yes.map(phrase => new Lexeme(phrase, consentTags)) ) // Yes words (author sourced)
             .concat( yesNoWords.no.map(phrase => new Lexeme(phrase, refusalTags)) ), // No words (author sourced)
  'ja_JP': [].concat( yesWords.map(phrase => new Lexeme(phrase, consentTags, 'ja_JP')) ) // Yes words (manually sourced)
             .concat( noWords.map(phrase => new Lexeme(phrase, refusalTags, 'ja_JP')) ) // No words (manually sourced)
};

module.exports = class ConsentLex extends Lexicon
{
  constructor(locale = 'en_GB')
  {
    super(locale);
    this.addEntries(lexemes[locale]);
  }
};
