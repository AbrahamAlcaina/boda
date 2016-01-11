require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];
/* eslint-disable  */
// disable validations becouse it is using global variables injected by  WebPack in the client side.
module.exports = Object.assign({
  port: process.env.PORT,
  apiProtocol: process.env.APIPROTOCOL,
  app: {
    title: 'Nicole & Abraham weeding',
    description: 'Aquí encontrarás toda la información relacionada con nuestra boda.',
    meta: {
      charSet: 'utf-8',
      property: {
        'og:site_name': 'Nicole i Abraham',
        'og:image': 'https://nicoleiabraham/logo.jpg',
        'og:locale': 'es_CA',
        'og:title': 'Nicole i Abraham ',
        'og:description': 'Aquí encontrarás toda la información relacionada con nuestra boda.',
        'twitter:card': 'summary',
        'twitter:site': '@abrahamalcaian',
        'twitter:creator': '@abrahamalacaina',
        'twitter:title': 'Nicole i Abraham',
        'twitter:description': 'Aquí encontrarás toda la información relacionada con nuestra boda.',
        'twitter:image': 'https://nicoleiabraham/logo.jpg',
        'twitter:image:width': '200',
        'twitter:image:height': '200'
      }
    }
  },
  locale: 'ca',
  locales: ['en', 'es', 'ca']
}, environment);
/* eslint-enable  */
