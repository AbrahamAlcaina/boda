import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const LOAD_SLEEP_PLACE = 'LOAD_SLEEP_PLACE';
const initialState = Immutable.fromJS({
  loaded: false
});

export default handleActions({
  LOAD_SLEEP_PLACE_LOADING: (state) => state.set({ loading: true }),
  LOAD_SLEEP_PLACE_SUCCESS: (state, action) =>
    state
      .update(sleepPlace => sleepPlace
      .set('loading', false)
      .set('loaded', true)
      .set('sleepPlace', Immutable.fromJS(action.payload.sleepPlace))),
  LOAD_SLEEP_PLACE_ERROR: (state, action) => state
    .set('loaded', false)
    .set('loading', false)
    .set('error', Immutable.fromJS(action.payload))
}, initialState);

export const loadApp = createAction(LOAD_SLEEP_PLACE, () => ({
  promise: new Promise(resolve => {
    const sleepPlace = {};
    // simutale load from server
    setTimeout(() => resolve(sleepPlace), 500);
  })
}));
