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
    head: {
      titleTemplate: 'Nicole i Abraham: %s',
      meta: [
        {name: 'description', content: 'Nicole i Abraham'},
        {name: 'theme-color', content: '#00bcd4'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Nicole i Abraham'},
        {property: 'og:image', content: 'https://nicoleiabraham/logo.jpg'},
        {property: 'og:locale', content: 'es_CA'},
        {property: 'og:title', content: 'Nicole i Abraham '},
        {property: 'og:description', content: 'Aquí encontrarás toda la información relacionada co, content: nuestra boda.'},
        {property: 'twitter:card', content: 'summary'},
        {property: 'twitter:site', content: '@abrahamalcaina'},
        {property: 'twitter:creator', content: '@abrahamalacaina'},
        {property: 'twitter:title', content: 'Nicole i Abraham'},
        {property: 'twitter:description', content: 'Aquí encontrarás toda la información relacionada con nuestra boda.'},
        {property: 'twitter:image', content:  'https://nicoleiabraham/logo.jpg'},
        {property: 'twitter:image:width', content: '200'},
        {property: 'twitter:image:height', content: '200'}
      ]
    }
  },
  locale: 'ca',
  locales: ['en', 'es', 'ca']
}, environment);
/* eslint-enable  */
