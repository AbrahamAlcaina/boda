import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import config from './config';
import favicon from 'serve-favicon';
import compression from 'compression';
import path from 'path';
import createStore from './redux/create';
import ApiClient from './helpers/ApiClient';
import Html from './helpers/Html';
import PrettyError from 'pretty-error';
import http from 'http';
import { ReduxRouter } from 'redux-router';
import createHistory from 'history/lib/createMemoryHistory';
import { reduxReactRouter, match } from 'redux-router/server';
import { Provider } from 'react-redux';
import qs from 'query-string';
import getRoutes from './routes';
import getStatusFromRoutes from './helpers/getStatusFromRoutes';
import { loadCss } from './utils/loadcss';
import { getCurrentLocale, translations } from './utils/intl';
import { IntlProvider } from 'react-intl';
import './server/intl-polyfill';

let css = void 0;
const pretty = new PrettyError();
const app = new Express();
app.set('port', config.port || 1337);
const server = new http.Server(app);

app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));
app.use(require('serve-static')(path.join(__dirname, '..', 'static')));

app.use(/^((?!(api|auth)).)*$/, (req, res) => {
  if (!css) {
    css = loadCss(webpackIsomorphicTools.assets());
  }

  if (__DEVELOPMENT__) {
    // Do not cache webpack stats: the script file would change since
    // hot module replacement is enabled in the development env
    webpackIsomorphicTools.refresh();
  }
  const client = new ApiClient(req);

  const store = createStore(reduxReactRouter, getRoutes, createHistory, client);
  const locale = getCurrentLocale(req);
  const localeMessages = translations[locale];
  const localeData = require(`react-intl/dist/locale-data/${locale}`);
  function hydrateOnClient() {
    res.send('<!doctype html>\n' +
      ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} store={store}/>));
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient();
    return;
  }

  store.dispatch(match(req.originalUrl, (error, redirectLocation, routerState) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('ROUTER ERROR:', pretty.render(error));
      res.status(500);
      hydrateOnClient();
    } else if (!routerState) {
      res.status(500);
      hydrateOnClient();
    } else {
      // Workaround redux-router query string issue:
      // https://github.com/rackt/redux-router/issues/106
      if (routerState.location.search && !routerState.location.query) {
        /* eslint-disable */
        routerState.location.query = qs.parse(routerState.location.search);
        /* eslint-enable */
      }
      store.getState().router.then(() => {
        const component = (
            <Provider store={store} key="provider">
              <IntlProvider locale={locale} messages={localeMessages}>
                <ReduxRouter/>
              </IntlProvider>
            </Provider>
        );

        const status = getStatusFromRoutes(routerState.routes);
        if (status) {
          res.status(status);
        }

        // fix for material-ui server-side rendering
        global.navigator = {
          userAgent: req.headers['user-agent']
        };

        res.send('<!doctype html>\n' +
          ReactDOM.renderToString(
            <Html locale={locale}
              localeData={localeData}
              localeMessages={localeMessages}
              assets={webpackIsomorphicTools.assets()}
              css={css}
              component={component}
              store={store}
            />));
      }).catch((err) => {
        console.error('DATA FETCHING ERROR:', pretty.render(err));
        res.status(500);
        hydrateOnClient();
      });
    }
  }));
});

server.listen(app.get('port'), (err) => {
  if (err) {
    console.error(err);
  }
  console.info('==> 💻  Open http://%s:%s in a browser to view the app.', (process.env.HOST || 'localhost'), config.port);
});
