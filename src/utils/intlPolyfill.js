/* global Intl */

// Add support for intl on node.js
// See: http://formatjs.io/guides/runtime-environments/#server
import { defaultLocales } from './intl';
import areIntlLocalesSupported from 'intl-locales-supported';

if (!global.Intl || !areIntlLocalesSupported(defaultLocales)) {
  require('intl');
}
