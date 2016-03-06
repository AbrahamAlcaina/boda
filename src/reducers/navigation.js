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
        path: '/weekend-plan',
        name: 'weekendPlan',
        title: 'nav.right.weekendPlan'
      },
      {
        path: '/weeding-place',
        name: 'weedingPlace',
        title: 'nav.right.weedingPlace'
      },
      {
        path: '/place',
        name: 'place',
        title: 'nav.right.place'
      },
      {
        path: '/sleep-place',
        name: 'sleepPlace',
        title: 'nav.right.sleepPlace'
      },
      {
        path: '/guests',
        name: 'guests',
        title: 'nav.right.guests'
      },
      {
        path: '/our-history',
        name: 'ourHistory',
        title: 'nav.right.ourHistory'
      },
      {
        path: '/honey-moon',
        name: 'honeyMoon',
        title: 'nav.right.weedingList'
      },
    ];
    // simutale load from server
    setTimeout(() => resolve(navigation), 500);
  })
}));
