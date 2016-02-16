import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const LOAD_WEDDING = 'LOAD_WEDDING';
const initialState = Immutable.fromJS({
  loaded: false
});

export default handleActions({
  LOAD_WEDDING_LOADING: (state) => state.set({ loading: true }),
  LOAD_WEDDING_SUCCESS: (state, action) =>
    state
      .update(wedding => wedding
      .set('loading', false)
      .set('loaded', true)
      .set('wedding', Immutable.fromJS(action.payload.wedding))),
  LOAD_WEDDING_ERROR: (state, action) => state
    .set('loaded', false)
    .set('loading', false)
    .set('error', Immutable.fromJS(action.payload))
}, initialState);

export const loadApp = createAction(LOAD_WEDDING, () => ({
  promise: new Promise(resolve => {
    const wedding = {};
    // simutale load from server
    setTimeout(() => resolve(wedding), 500);
  })
}));
