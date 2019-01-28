import { combineReducers } from 'redux-immutable';
import {reducer as homeWindowsReducer} from "../pages/Home/store";

const reducer = combineReducers({
  homeWindows: homeWindowsReducer,

})

export default reducer