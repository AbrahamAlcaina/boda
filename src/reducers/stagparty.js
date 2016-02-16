import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const LOAD_STAG_PARTY = 'LOAD_STAG_PARTY';
const initialState = Immutable.fromJS({
  loaded: false
});

export default handleActions({
  LOAD_STAG_PARTY_LOADING: (state) => state.set({ loading: true }),
  LOAD_STAG_PARTY_SUCCESS: (state, action) =>
    state
      .update(stagparty => stagparty
      .set('loading', false)
      .set('loaded', true)
      .set('stagparty', Immutable.fromJS(action.payload.stagparty))),
  LOAD_STAG_PARTY_ERROR: (state, action) => state
    .set('loaded', false)
    .set('loading', false)
    .set('error', Immutable.fromJS(action.payload))
}, initialState);

export const loadApp = createAction(LOAD_STAG_PARTY, () => ({
  promise: new Promise(resolve => {
    const stagparty = {};
    // simutale load from server
    setTimeout(() => resolve(stagparty), 500);
  })
}));
