import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const LOAD_SCHEDULE = 'LOAD_SCHEDULE';
const initialState = Immutable.fromJS({
  loaded: false
});

export default handleActions({
  LOAD_SCHEDULE_LOADING: (state) => state.set({ loading: true }),
  LOAD_SCHEDULE_SUCCESS: (state, action) =>
    state
      .update(schedule => schedule
      .set('loading', false)
      .set('loaded', true)
      .set('schedule', Immutable.fromJS(action.payload.schedule))),
  LOAD_SCHEDULE_ERROR: (state, action) => state
    .set('loaded', false)
    .set('loading', false)
    .set('error', Immutable.fromJS(action.payload))
}, initialState);

export const loadApp = createAction(LOAD_SCHEDULE, () => ({
  promise: new Promise(resolve => {
    const schedule = {};
    // simutale load from server
    setTimeout(() => resolve(schedule), 500);
  })
}));
