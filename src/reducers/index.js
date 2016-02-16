import { combineReducers } from 'redux-immutable';
import contact from './contact';
import guest from './guest';
import history from './history';
import intializeState from './intializeState';
import landing from './landing';
import place from './place';
import schedule from './schedule';
import stagparty from './stagparty';
import weeding from './wedding';

const rootReducer = combineReducers({
  contact,
  guest,
  history,
  intializeState,
  landing,
  place,
  schedule,
  stagparty,
  weeding
});

export default rootReducer;
