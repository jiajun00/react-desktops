import defaultState from './state'
import * as constants from './constants'

export default (state = defaultState, action) => {
  switch (action.type){
    case constants.EMPTY_LIST:
      return state.set('emptyLists',action.list)
    case constants.SET_FILE_LIST:
      return state.set('fileLists',action.list)
    default:
      return state;
  }
}