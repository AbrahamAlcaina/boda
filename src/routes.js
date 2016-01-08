import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { isLoaded as isAuthLoaded } from 'redux/modules/auth';
import {
    App,
    Home,
    Shop,
    Splash,
    NotFound,
  } from 'containers';

export default (store) => {
  const requireLogin = (nextState, replaceState, cb) => {
    function checkAuth() {
      const { auth: { user } } = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        replaceState(null, '/');
      }
      cb();
    }
    if (!isAuthLoaded(store.getState())) {
      checkAuth();
    } else {
      cb();
    }
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Splash (main) route */ }
      <IndexRoute component={Splash}/>

      { /* Routes requiring login */ }
      <Route onEnter={requireLogin}>
        <Route path="home" component={Home}/>
        <Route path="shop" component={Shop}/>
      </Route>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
