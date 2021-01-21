const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const input = process.argv[2];

const langCode = franc(input);

if (langCode === 'und') {
  console.log(
    "Sorry, We don't understand your language, give us more full sentence!".red
  );
} else {
  const language = langs.where('3', langCode);
  console.log(`Our best guess is: ${language.name}`.green);
}
