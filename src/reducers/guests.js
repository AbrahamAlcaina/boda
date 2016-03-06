import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const LOAD_GUEST = 'LOAD_GUEST';
const CHANGE_ATTEND = 'CHANGE_ATTEND';
const CHANGE_NEED_PLACE = 'CHANGE_NEED_PLACE';
const initialState = Immutable.fromJS({
  loaded: false
});
const url = "http://nicoleiabraham.com/graphql";

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
    .set('error', Immutable.fromJS(action.payload)),
  CHANGE_ATTEND_LOADING: (state, action) =>
    state.update(guest => guest
      .set({ updatingUser: true })
      .update('guests', guests =>
          guests.update(
            guests.findIndex(item => item.get('id') === action.payload.id),
            item => item.set('attend', action.payload.attend))
          )
    ),
  CHANGE_ATTEND_SUCCESS: state => state.update(guest => guest.set({ updatingUser: false })),
  CHANGE_ATTEND_ERROR: (state, action) =>
    state.update(guest => guest
      .set({ updatingUser: true })
      .update('guests', guests =>
          guests.update(
            guests.findIndex(item => item.get('id') === action.payload.id),
            item => item.set('attend', !action.payload.attend))
          )
    ),
  CHANGE_NEED_PLACE_SUCCESS: state => state.update(guest => guest.set({ updatingUser: false })),
  CHANGE_NEED_PLACE_LOADING: (state, action) =>
    state.update(guest => guest
      .set({ updatingUser: true })
      .update('guests', guests =>
          guests.update(
            guests.findIndex(item => item.get('id') === action.payload.id),
            item => item.set('needPlace', action.payload.needPlace))
          )
    ),
  CHANGE_NEED_PLACE_ERROR: (state, action) =>
    state.update(guest => guest
      .set({ updatingUser: true })
      .update('guests', guests =>
          guests.update(
            guests.findIndex(item => item.get('id') === action.payload.id),
            item => item.set('needPlace', !action.payload.needPlace))
          )
    ),
}, initialState);
const getUser = `
  fragment getUser on  Guest{
            id
            name
            type
            group,
            attend,
            needPlace
          }`;
export const loadGuests = createAction(LOAD_GUEST, () => ({
  promise: new Promise(resolve =>
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql'
      },
      body: `${getUser}
        query get {
          guests{
            ...getUser
          }
        }
      `
    })
    .then(response => response.json())
    .then(data => resolve(data.data.guests)))
}));

export const changeAttend = createAction(CHANGE_ATTEND, (id, attend) => ({
  promise: new Promise(resolve =>
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql'
      },
      body: `
      ${getUser}
      mutation attend {
        updateGuest(input: {id: "${id}", attend: ${attend}, clientMutationId: "1"}) {
          changedGuest{
            ...getUser
          }
        }
      }
      `
    })
    .then(response => response.json())
    .then(data => resolve(data.data.updateGuest.changedGuest)
  )),
  data: {
    id,
    attend
  }
}));

export const changeNeedPlace = createAction(CHANGE_NEED_PLACE, (id, needPlace) => ({
  promise: new Promise(resolve =>
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql'
      },
      body: `
      ${getUser}
      mutation placed {
        updateGuest(input: {id: "${id}", needPlace: ${needPlace}, clientMutationId: "1"}) {
          changedGuest{
            ...getUser
          }
        }
      }
      `
    })
    .then(response => response.json())
    .then(data => resolve(data.data.updateGuest.changedGuest)
  )),
  data: {
    id,
    needPlace
  }
}));
