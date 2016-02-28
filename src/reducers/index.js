import { combineReducers } from 'redux-immutable';
import contact from './contact';
import guests from './guests';
import history from './history';
import initializeState from './initializeState';
import landing from './landing';
import navigation from './navigation';
import place from './place';
import stagparty from './stagparty';
import weedingPlace from './weedingPlace';
import weeding from './wedding';
import sleepPlace from './sleepPlace';
import weedingList from './weedingList';

const rootReducer = combineReducers({
  contact,
  guests,
  history,
  initializeState,
  landing,
  navigation,
  place,
  stagparty,
  weeding,
  weedingPlace,
  sleepPlace,
  weedingList
});

export default rootReducer;
