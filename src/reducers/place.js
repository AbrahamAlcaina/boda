import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const LOAD_PLACE = 'LOAD_PLACE';
const initialState = Immutable.fromJS({
  loaded: false
});

export default handleActions({
  LOAD_PLACE_LOADING: (state) => state.set({ loading: true }),
  LOAD_PLACE_SUCCESS: (state, action) =>
    state
      .update(place => place
      .set('loading', false)
      .set('loaded', true)
      .set('place', Immutable.fromJS(action.payload.place))),
  LOAD_PLACE_ERROR: (state, action) => state
    .set('loaded', false)
    .set('loading', false)
    .set('error', Immutable.fromJS(action.payload))
}, initialState);

export const loadApp = createAction(LOAD_PLACE, () => ({
  promise: new Promise(resolve => {
    const place = {};
    // simutale load from server
    setTimeout(() => resolve(place), 500);
  })
}));
