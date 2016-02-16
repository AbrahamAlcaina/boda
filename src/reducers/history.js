import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const LOAD_HISTORY = 'LOAD_HISTORY';
const initialState = Immutable.fromJS({
  loaded: false
});

export default handleActions({
  LOAD_HISTORY_LOADING: (state) => state.set({ loading: true }),
  LOAD_HISTORY_SUCCESS: (state, action) =>
    state
      .update(history => history
      .set('loading', false)
      .set('loaded', true)
      .set('history', Immutable.fromJS(action.payload.history))),
  LOAD_HISTORY_ERROR: (state, action) => state
    .set('loaded', false)
    .set('loading', false)
    .set('error', Immutable.fromJS(action.payload))
}, initialState);

export const loadApp = createAction(LOAD_HISTORY, () => ({
  promise: new Promise(resolve => {
    const history = {};
    // simutale load from server
    setTimeout(() => resolve(history), 500);
  })
}));
