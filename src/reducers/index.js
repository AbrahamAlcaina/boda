import { combineReducers } from 'redux-immutable';
import contact from './contact';
import guests from './guests';
import history from './history';
import initializeState from './initializeState';
import landing from './landing';
import place from './place';
import schedule from './schedule';
import stagparty from './stagparty';
import weeding from './wedding';

const rootReducer = combineReducers({
  contact,
  guests,
  history,
  initializeState,
  landing,
  place,
  schedule,
  stagparty,
  weeding
});

export default rootReducer;
