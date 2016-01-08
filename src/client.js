/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel-polyfill';
import './client/reactTapEventPlugin';
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/lib/createBrowserHistory';
import createStore from './redux/create';
import ApiClient from './helpers/ApiClient';
import { Provider } from 'react-redux';
import { reduxReactRouter, ReduxRouter } from 'redux-router';
import { addLocaleData, IntlProvider } from 'react-intl';
import getRoutes from './routes';
import makeRouteHooksSafe from './helpers/makeRouteHooksSafe';


const client = new ApiClient();

const dest = document.getElementById('content');
const store = createStore(reduxReactRouter, makeRouteHooksSafe(getRoutes),
  createHistory, client, window.__data.store);


const { locale, localeData, localeMessages } = window.__data;
addLocaleData(localeData);
const component = (
  <IntlProvider locale={locale} messages={localeMessages}>
    <ReduxRouter routes={getRoutes(store)}/>
  </IntlProvider>
 );

if (!__DEVTOOLS__) {
  ReactDOM.render(
    <Provider store={store} key="provider">
        {component}
    </Provider>,
    dest
  );
}

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes
    || !dest.firstChild.attributes['data-react-checksum']) {
    console.error(`Server-side React render was discarded.
      Make sure that your initial render does not contain any client-side code.`);
  }
}

if (__DEVTOOLS__ && !window.devToolsExtension) {
  const DevTools = require('./containers/DevTools/DevTools');
  ReactDOM.render(
    <Provider store={store} key="provider">
      <div>
          {component}
        <DevTools />
      </div>
    </Provider>,
    dest
  );
}
