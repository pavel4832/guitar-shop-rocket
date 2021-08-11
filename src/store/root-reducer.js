import {combineReducers} from 'redux';
import {DATA} from './data/data';


export const NameSpace = {
  DATA: `DATA`,
};

export default combineReducers({
  [NameSpace.DATA]: DATA,
});
