import { locale as defaultLocale } from 'config';
import { sync as globSync } from 'glob';
import { readFileSync } from 'fs';
import * as path from 'path';
import locale from 'locale';

const getDefaultLocale = () => {
  return defaultLocale;
};

const translations = globSync('./static/lang/*.json')
  .map((filename) => [
    path.basename(filename, '.json'),
    readFileSync(filename, 'utf8'),
  ])
  .map(([localeFile, file]) => [localeFile, JSON.parse(file)])
  .reduce((collection, [localeFile, messages]) => {
    collection[localeFile] = messages; // eslint-disable-line no-param-reassign
    return collection;
  }, {});

const supported = new locale.Locales(Object.keys(translations));
const IntlUtils = {
  getCurrentLocale(req) {
    const locales = new locale.Locales(req.headers['accept-language']);
    if (!locales.best(supported)) {
      return getDefaultLocale();
    }
    return locales.best(supported).toString();
  },
  translations
};

export default IntlUtils;
