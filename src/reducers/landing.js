import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const LOAD_LANDING = 'LOAD_LANDING';
const initialState = Immutable.fromJS({
  loaded: false
});

export default handleActions({
  LOAD_LANDING_LOADING: (state) => state.set({ loading: true }),
  LOAD_LANDING_SUCCESS: (state, action) =>
    state
      .update(landing => landing
      .set('loading', false)
      .set('loaded', true)
      .set('landing', Immutable.fromJS(action.payload.landing))),
  LOAD_LANDING_ERROR: (state, action) => state
    .set('loaded', false)
    .set('loading', false)
    .set('error', Immutable.fromJS(action.payload))
}, initialState);

export const loadApp = createAction(LOAD_LANDING, () => ({
  promise: new Promise(resolve => {
    const landing = {};
    // simutale load from server
    setTimeout(() => resolve(landing), 500);
  })
}));
