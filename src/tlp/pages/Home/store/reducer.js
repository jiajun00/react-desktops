import defaultState from './state'
import * as constants from './constants'

export default (state = defaultState, action) => {
  switch (action.type){
    case constants.ADD_WINDOW_LIST: //添加工具栏列表
      return state.set('openWindowList',action.openWindowList)
    case constants.OPEN_MENU_NAV: //正在访问菜单
      return state.set('openMenuNav',action.menuNav)
    case constants.CLEAR_MENU_NAV: //清空正在访问菜单
      return state.merge({
        isEnterMenu:action.isEnterMenu,
        isEnterMenuNav:action.isEnterMenuNav,
        openMenuNav:action.openMenuNav
      })
    case constants.MOUSE_ENTER_MENU://鼠标进入菜单栏
      return state.set('isEnterMenu',action.isEnterMenu)
    case constants.MOUSE_LEAVEL_MENU://鼠标离开菜单栏
      return state.set('isEnterMenu',action.isEnterMenu)
    case constants.MOUSE_ENTER_MENU_NAV://鼠标进入菜单选择栏
      return state.set('isEnterMenuNav',action.isEnterMenuNav)
    case constants.MOUSE_LEAVEL_MENU_NAV://鼠标离开菜单选择栏
      return state.set('isEnterMenuNav',action.isEnterMenuNav)
    case constants.CLOSE_WINDOW://关闭窗口
      return state.set('openWindowList',action.openWindowList)
    case constants.HIDDEN_WINDOW://隐藏窗口
      return state.set('openWindowList',action.windowList)
    case constants.SHOW_WINDOW://显示窗口
      return state.set('openWindowList',action.windowList)
    case constants.LOAD_WINDOW://读取完成窗口
      return state.set('openWindowList',action.windowList)
    case constants.SET_DATE_TIME://设置日期
      return state.set('dataTime',action.dataTime)
    default:
      return state;
  }
}