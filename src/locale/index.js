const userLanguage = typeof navigator !== 'undefined' ? navigator.language : 'en';
const languageCode = userLanguage.slice(0, 2);

let selectedLocale = {};

try {
  selectedLocale = require(`./${languageCode}.json`);
} catch (error) {
  selectedLocale = require('./en.json');
}

export default selectedLocale;
