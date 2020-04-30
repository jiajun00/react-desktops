import { combineReducers } from 'redux-immutable';
import { reducer as homeTlpReducer } from '../pages/Home/store/index';
import { reducer as fileTlpReducer } from '../pages/File/store/index';

const reducer = combineReducers({
  homeMac: homeTlpReducer,
  fileMac: fileTlpReducer
})

export default reducer;