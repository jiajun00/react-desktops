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
    case constants.ADD_WINDOW_LIST: //添加工具栏列表
      return state.set('openWindowList',action.openWindowList)
    case constants.SHOW_WINDOW://显示窗口
      return state.set('openWindowList',action.windowList)
    case constants.CLOSE_WINDOW://关闭窗口
      return state.set('openWindowList',action.openWindowList)
    case constants.HIDDEN_WINDOW://隐藏窗口
      return state.set('openWindowList',action.windowList)
    case constants.LOAD_WINDOW://读取完成窗口
      return state.set('openWindowList',action.windowList)
    case constants.SET_BACKGROUND://设置桌面背景
      return state.set('background',action.backgroundDesk)
    case constants.SET_CONTEXT_MENU_LIST://设置右键菜单列表
      return state.set('contextMenu',action.list)
    case constants.SET_DESKTOP_APPS_SHOW_CONTROL://设置桌面图标显示属性
      return state.set('desktopAppsShowControl',action.data)
    default:
      return state;
  }
}