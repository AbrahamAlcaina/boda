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
        path: '/contact',
        name: 'contact'
      },
      {
        path: '/guest',
        name: 'guest'
      },
      {
        path: '/history',
        name: 'history'
      },
      {
        path: '/landing',
        name: 'landing'
      },
      {
        path: '/place',
        name: 'place'
      },
      {
        path: '/schedule',
        name: 'schedule'
      },
      {
        path: '/stagparty',
        name: 'stagparty'
      },
      {
        path: '/wedding',
        name: 'weeding'
      },
    ];
    // simutale load from server
    setTimeout(() => resolve(navigation), 500);
  })
}));
