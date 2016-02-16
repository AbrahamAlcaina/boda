import { fromJS } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
const INITIALIZE = 'INITIALIZE';

export const initialize = createAction(INITIALIZE);
export default handleActions({
  INITIALIZE: () => fromJS({})
}, {});
