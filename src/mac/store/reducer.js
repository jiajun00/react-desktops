import { combineReducers } from 'redux-immutable';
import { reducer as homeMacReducer } from '../pages/Home/store/index'
import { reducer as fileMacReducer } from '../pages/File/store/index'

const reducer = combineReducers({
  homeMac: homeMacReducer,
  fileMac: fileMacReducer
})

export default reducer