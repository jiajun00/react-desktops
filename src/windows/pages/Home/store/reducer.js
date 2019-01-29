import defaultState from './state'
import * as constants from './constants'

export default (state = defaultState, action) => {
  switch (action.type){
    case constants.SET_DATE_TIME://设置日期
      return state.set('dataTime',action.dataTime)
    default:
      return state;
  }
}