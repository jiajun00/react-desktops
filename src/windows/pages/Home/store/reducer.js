import defaultState from './state'
import * as constants from './constants'

export default (state = defaultState, action) => {
  switch (action.type){
    case constants.SET_DATE_TIME://设置日期
      return state.set('dataTime',action.dataTime)
    case constants.OPEN_MESSAGE_BOX: //打开消息框
      return state.set('isOpenMessageBox',action.data)
    case constants.CLOSE_MESSAGE_BOX: //关闭消息框
      return state.set('isOpenMessageBox',action.data)
    case constants.OPEN_START_BOX: //打开开始菜单
      return state.set('isOpenStartBox',action.data)
    case constants.CLOSE_START_BOX: //关闭开始菜单
      return state.set('isOpenStartBox',action.data)
    default:
      return state;
  }
}