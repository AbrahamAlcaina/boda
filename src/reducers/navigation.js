import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const LOAD_NAVIGATION = 'LOAD_NAVIGATION';
const initialState = Immutable.fromJS({
  loaded: false
});

export default handleActions({
  LOAD_NAVIGATION_LOADING: (state) => state.set({ loading: true }),
  LOAD_NAVIGATION_SUCCESS: (state, action) =>
    state
      .update(navigation => navigation
      .set('loading', false)
      .set('loaded', true)
      .set('navigation', Immutable.fromJS(action.payload))),
  LOAD_NAVIGATION_ERROR: (state, action) => state
    .set('loaded', false)
    .set('loading', false)
    .set('error', Immutable.fromJS(action.payload))
}, initialState);

export const loadNavigationOptions = createAction(LOAD_NAVIGATION, () => ({
  promise: new Promise(resolve => {
    const navigation = [
      {
        path: '/',
        name: 'home',
        title: 'nav.right.home'
      },
      {
        path: '/weekendPlan',
        name: 'weekendPlan',
        title: 'nav.right.weekendPlan'
      },
      {
        path: '/contact',
        name: 'contact',
        title: 'nav.right.contact'
      },
      {
        path: '/guest',
        name: 'guest',
        title: 'nav.right.guests'
      },
      {
        path: '/history',
        name: 'history',
        title: 'nav.right.history'
      },
      {
        path: '/landing',
        name: 'landing',
        title: 'nav.right.landing'
      },
      {
        path: '/place',
        name: 'place',
        title: 'nav.right.place'
      },
      {
        path: '/schedule',
        name: 'schedule',
        title: 'nav.right.schedule'
      },
      {
        path: '/wedding',
        name: 'weeding',
        title: 'boda'
      },
    ];
    // simutale load from server
    setTimeout(() => resolve(navigation), 500);
  })
}));
