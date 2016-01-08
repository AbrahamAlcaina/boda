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
    title: 'React Redux Example',
    description: 'All the modern best practices in one example.',
    meta: {
      charSet: 'utf-8',
      property: {
        'og:site_name': 'React Redux Example',
        'og:image': 'https://react-redux.herokuapp.com/logo.jpg',
        'og:locale': 'en_US',
        'og:title': 'React Redux Example',
        'og:description': 'All the modern best practices in one example.',
        'twitter:card': 'summary',
        'twitter:site': '@erikras',
        'twitter:creator': '@erikras',
        'twitter:title': 'React Redux Example',
        'twitter:description': 'All the modern best practices in one example.',
        'twitter:image': 'https://react-redux.herokuapp.com/logo.jpg',
        'twitter:image:width': '200',
        'twitter:image:height': '200'
      }
    }
  },
  locale: 'en',
  locales: ['en', 'es'],
  FB_APP_ID: process.env.FB_APP_ID,
  APISERVER: process.env.APISERVER,
  APIPROTOCOL: process.env.APIPROTOCOL
}, environment);
/* eslint-enable  */
