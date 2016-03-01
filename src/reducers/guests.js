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
      .set('guests', Immutable.fromJS(action.payload))),
  LOAD_GUEST_ERROR: (state, action) => state
    .set('loaded', false)
    .set('loading', false)
    .set('error', Immutable.fromJS(action.payload))
}, initialState);

export const loadGuests = createAction(LOAD_GUEST, () => ({
  promise: new Promise(resolve =>
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql'
      },
      body: `
        {
          guests {
            name
            type
            group
          }
        }
      `
    })
    .then(response => response.json())
    .then(data => resolve(data.data.guests)))
}));
