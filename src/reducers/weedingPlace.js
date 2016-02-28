import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const LOAD_WEEDING_PLACE = 'LOAD_WEEDING_PLACE';
const initialState = Immutable.fromJS({
  loaded: false
});

export default handleActions({
  LOAD_WEEDING_PLACE_LOADING: (state) => state.set({ loading: true }),
  LOAD_WEEDING_PLACE_SUCCESS: (state, action) =>
    state
      .update(weedingPlace => weedingPlace
      .set('loading', false)
      .set('loaded', true)
      .set('weedingPlace', Immutable.fromJS(action.payload.weedingPlace))),
  LOAD_WEEDING_PLACE_ERROR: (state, action) => state
    .set('loaded', false)
    .set('loading', false)
    .set('error', Immutable.fromJS(action.payload))
}, initialState);

export const loadApp = createAction(LOAD_WEEDING_PLACE, () => ({
  promise: new Promise(resolve => {
    const weedingPlace = {};
    // simutale load from server
    setTimeout(() => resolve(weedingPlace), 500);
  })
}));
