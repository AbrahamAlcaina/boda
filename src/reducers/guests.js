import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const LOAD_GUEST = 'LOAD_GUEST';
const initialState = Immutable.fromJS({
  loaded: false
});

export default handleActions({
  LOAD_GUEST_LOADING: (state) => state.set({ loading: true }),
  LOAD_GUEST_SUCCESS: (state, action) =>
    state
      .update(guest => guest
      .set('loading', false)
      .set('loaded', true)
      .set('guest', Immutable.fromJS(action.payload.guest))),
  LOAD_GUEST_ERROR: (state, action) => state
    .set('loaded', false)
    .set('loading', false)
    .set('error', Immutable.fromJS(action.payload))
}, initialState);

export const loadApp = createAction(LOAD_GUEST, () => ({
  promise: new Promise(resolve => {
    const guest = {};
    // simutale load from server
    setTimeout(() => resolve(guest), 500);
  })
}));
