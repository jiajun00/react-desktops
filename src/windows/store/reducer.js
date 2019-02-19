import { combineReducers } from 'redux-immutable'
import {reducer as homeWindowsReducer} from "../pages/Home/store"
import {reducer as fileManageReducer} from "../pages/FileManage/store"

const reducer = combineReducers({
  homeWindows: homeWindowsReducer,
  fileManage: fileManageReducer
})

export default reducer