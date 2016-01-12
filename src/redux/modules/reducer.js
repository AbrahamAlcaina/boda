import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import auth from './auth';
import home from './home';

export default combineReducers({
  router: routerStateReducer,
  auth,
  home
});
