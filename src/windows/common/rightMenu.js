import store from "../store"
import {actionCreators as homeActionCreators} from "../pages/Home/store";
import {actionCreators as mainActionCreators} from "../store/main";

/*
 * 打开窗口的处理方法
 */
export const openWindow = (type,value) => {
  if(type==='openDesktopSet'){
    const openWindowList = store.getState().toJS().homeWindows.openWindowList
    const data = value
    console.log(data)
    data.url += '/'+ store.getState().toJS().homeWindows.background.type
    store.dispatch(mainActionCreators.set_context_menu_box([],false,null))  //关闭右键菜单
    store.dispatch(homeActionCreators.setWindowOpenList(data,openWindowList)) //打开窗口
  }
}

/*
 * 关闭右键菜单
 */
export const closeContextMenu = () => {
  if(store.getState().toJS().mainWindows.isOpenContextMenu && !store.getState().toJS().mainWindows.isEnterContextMenu){
    store.dispatch(mainActionCreators.set_context_menu_box([],false,null))
  }
}

/*
 * 刷新功能
 */
export const refreshCurrentPage = () => {
  window.location.reload()
  // this.forceUpdate()
}