import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const LOAD_CONTACT = 'LOAD_CONTACT';
const initialState = Immutable.fromJS({
  loaded: false
});

export default handleActions({
  LOAD_CONTACT_LOADING: (state) => state.set({ loading: true }),
  LOAD_CONTACT_SUCCESS: (state, action) =>
    state
      .update(contact => contact
      .set('loading', false)
      .set('loaded', true)
      .set('contact', Immutable.fromJS(action.payload.contact))),
  LOAD_CONTACT_ERROR: (state, action) => state
    .set('loaded', false)
    .set('loading', false)
    .set('error', Immutable.fromJS(action.payload))
}, initialState);

export const loadApp = createAction(LOAD_CONTACT, () => ({
  promise: new Promise(resolve => {
    const contact = {};
    // simutale load from server
    setTimeout(() => resolve(contact), 500);
  })
}));
