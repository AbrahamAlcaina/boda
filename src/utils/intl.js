import { sync as globSync } from 'glob';
import { readFileSync } from 'fs';
import * as path from 'path';
import locale from 'locale';

export const defaultLocale = 'ca';
export const defaultLocales = ['ca', 'en'];

const getDefaultLocale = () => defaultLocale;

const isClient = typeof document !== 'undefined';
let _translations = {};
if (!isClient) {
  _translations = globSync('./static/lang/*.json')
    .map((filename) => [
      path.basename(filename, '.json'),
      readFileSync(filename, 'utf8'),
    ])
    .map(([localeFile, file]) => [localeFile, JSON.parse(file)])
    .reduce((collection, [localeFile, messages]) => {
      collection[localeFile] = messages; // eslint-disable-line no-param-reassign
      return collection;
    }, {});
}
export const translations = _translations;

const supported = new locale.Locales(Object.keys(translations));

export function getCurrentLocale(req) {
  const locales = new locale.Locales(req.headers['accept-language']);
  if (!locales.best(supported)) {
    return getDefaultLocale();
  }
  return locales.best(supported).toString();
}
