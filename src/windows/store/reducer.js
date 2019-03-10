import { combineReducers } from 'redux-immutable'
import {reducer as homeWindowsReducer} from "../pages/Home/store"
import {reducer as fileManageReducer} from "../pages/FileManage/store"
import {reducer as mainWondowsReducer} from "./main"

const reducer = combineReducers({
  mainWindows: mainWondowsReducer,
  homeWindows: homeWindowsReducer,
  fileManage: fileManageReducer
})

export default reducer