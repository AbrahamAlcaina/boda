import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const LOAD_WEEDING_LIST = 'LOAD_WEEDING_LIST';
const initialState = Immutable.fromJS({
  loaded: false
});

export default handleActions({
  LOAD_WEEDING_LIST_LOADING: (state) => state.set({ loading: true }),
  LOAD_WEEDING_LIST_SUCCESS: (state, action) =>
    state
      .update(weedingList => weedingList
      .set('loading', false)
      .set('loaded', true)
      .set('weedingList', Immutable.fromJS(action.payload.weedingList))),
  LOAD_WEEDING_LIST_ERROR: (state, action) => state
    .set('loaded', false)
    .set('loading', false)
    .set('error', Immutable.fromJS(action.payload))
}, initialState);

export const loadApp = createAction(LOAD_WEEDING_LIST, () => ({
  promise: new Promise(resolve => {
    const weedingList = {};
    // simutale load from server
    setTimeout(() => resolve(weedingList), 500);
  })
}));
