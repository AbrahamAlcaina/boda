import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { Map } from 'immutable';
import rootReducer from './reducers';
import { initialize } from './reducers/intializeState';
import devTools from 'remote-redux-devtools';

const middlewares = [promiseMiddleware({
  promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']
})];
let createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore() {
  if (process.env.NODE_ENV === 'development') {
    createStoreWithMiddleware = compose(applyMiddleware(...middlewares), devTools())(createStore);
  }
  const initialState = rootReducer(Map({}), initialize);
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
