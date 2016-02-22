import React from 'react';
import ReactDOM from 'react-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import { Router, match, RouterContext, browserHistory } from 'react-router';
import Helmet from 'react-helmet';
import routes from './routes';
import { Provider } from 'react-redux';
import * as containers from './containers';
import configureStore from './configureStore';
import { getCurrentLocale, translations } from './utils/intl';
import { IntlProvider } from 'react-intl';
import css from './utils/loadCss';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


const isClient = typeof document !== 'undefined';

if (isClient) {
  const store = configureStore(window.__INITIAL_STATE__);
  const {
    locale,
    localeMessages
  } = window.__LANGUAGE__;
  ReactDOM.render(
        <IntlProvider locale={locale} messages={localeMessages}>
          <Provider store={store}>
              <Router history={browserHistory}>{routes}</Router>
          </Provider>
        </IntlProvider>,
        document.getElementById('root')
    );
}

function renderComponentWithRoot(Component, componentProps, store, req) {
  const locale = getCurrentLocale(req);
  const localeMessages = translations[locale];
  const componentHtml = renderToStaticMarkup(
      <IntlProvider locale={locale} messages={localeMessages}>
        <Provider store={store}>
          <Component {...componentProps} />
        </Provider>
      </IntlProvider>
  );

  const head = Helmet.rewind();
  const initialState = store.getState();
  const { Root } = containers;
  const html = renderToStaticMarkup(
      <Root
        content={componentHtml}
        initialState={initialState}
        head={head}
        locale={locale}
        localeMessages={localeMessages}
        css={css}
      />
  );
  return `<!doctype html>
      ${html}`;
}

function handle404(res) {
  const store = configureStore();
  const wholeHtml = renderComponentWithRoot(containers.NoMatch, null, store);
  res.status(404).send(wholeHtml);
}

function handleError(res, error) {
  res.status(500).send(error.message);
}

function handleRedirect(res, redirectLocation) {
  res.redirect(302, redirectLocation.pathname + redirectLocation.search);
}

function handleRoute(res, renderProps, req) {
  const store = configureStore();

  const readyOnAllActions = renderProps.components.map((component) =>
    component.readyOnActions ?
      component.readyOnActions(store.dispatch, renderProps.params)
      : false);

  // fix for material-ui server-side rendering
  global.navigator = {
    userAgent: req.headers['user-agent']
  };

  Promise.all(readyOnAllActions)
      .then(() => {
        const wholeHtml = renderComponentWithRoot(RouterContext, renderProps, store, req);
        res.status(200).send(wholeHtml);
      });
}

function serverMiddleware(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      handleError(error);
    } else if (res && redirectLocation) {
      handleRedirect(res, redirectLocation);
    } else if (renderProps) {
      handleRoute(res, renderProps, req);
    } else {
      handle404(res);
    }
  });
}

export default serverMiddleware;
