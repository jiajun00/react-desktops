import store from "../store"
import {actionCreators as homeActionCreators} from "../pages/Home/store";
import {actionCreators as mainActionCreators} from "../store/main";

/*
 * 打开窗口的处理方法
 * @param type String 打开窗口事件类型type
 * @param value Object 窗口数据
 */
export const openWindow = (type,value) => {
  if(type==='openDesktopSet'){
    const openWindowList = store.getState().toJS().homeWindows.openWindowList
    const data = value
    data.url += '/'+ store.getState().toJS().homeWindows.background.type
    store.dispatch(mainActionCreators.set_context_menu_box([],false,null))  //关闭右键菜单
    store.dispatch(homeActionCreators.setWindowOpenList(data,openWindowList)) //打开窗口
  }
}

/*
 * 选择右键菜单类型方法
 * @param group String 分类组
 * @param value String|Integer 选择值
 * @param position String 区域
 */
export const selectContextMenuType = (group,value,position) => {
  let contextMenu = store.getState().toJS().homeWindows.contextMenu
  const currentGroupIndex = contextMenu[position].findIndex(row=>{
    return row.type === group
  })
  const currentGroup = contextMenu[position][currentGroupIndex] //获取当前选项组

  if(currentGroup){
    const selectIndex = currentGroup.children.findIndex(row=>{
      return row.type === value
    })
    const currentSelect = contextMenu[position][currentGroupIndex].children[selectIndex]
    if(currentSelect){  //获取当前选中的对象
      currentGroup.children.forEach((row,i)=>{  //将所有选项清除
        if(row.logo.type === 'point'){
          contextMenu[position][currentGroupIndex].children[i].logo.value = false
        }
      })
      contextMenu[position][currentGroupIndex].children[selectIndex].logo.value = true
      store.dispatch(homeActionCreators.set_context_menu_list(contextMenu) ) //设置桌面contextMenu
      store.dispatch(mainActionCreators.set_context_menu_box([],false,null,1,false))
      if(position === 'desktops'){  //桌面
        let desktopAppsShowControl = store.getState().toJS().homeWindows.desktopAppsShowControl
        if(group === 'view'){//查看
          desktopAppsShowControl.size = value
        }
        if(group === 'sort_type'){//排列顺序
          desktopAppsShowControl.rankType = value
        }
        store.dispatch(homeActionCreators.set_desktop_apps_show_control(desktopAppsShowControl))
      }
    }
  }
}

/*
 * 切换是否显示桌面图标
 * @param group String 分类组
 * @param value String|Integer 选择值
 * @param position String 区域
 */
export const handleShowDesktopApps = (group,value,position) => {
  let contextMenu = store.getState().toJS().homeWindows.contextMenu
  const currentGroupIndex = contextMenu[position].findIndex(row=>{
    return row.type === group
  })
  const currentGroup = contextMenu[position][currentGroupIndex] //获取当前选项组
  if(currentGroup){
    const selectIndex = currentGroup.children.findIndex(row => {
      return row.type === value
    })
    if(selectIndex>=0){ //查找的对象存在
      const currentSelect = contextMenu[position][currentGroupIndex].children[selectIndex]
      if(currentSelect.logo.value){
        contextMenu[position][currentGroupIndex].children[selectIndex].logo.value = null
      }else{
        contextMenu[position][currentGroupIndex].children[selectIndex].logo.value = 'select'
      }
      store.dispatch(homeActionCreators.set_context_menu_list(contextMenu) ) //设置桌面contextMenu
    }
  }
  const desktopAppsShowControl = store.getState().toJS().homeWindows.desktopAppsShowControl
  desktopAppsShowControl.isShow = !desktopAppsShowControl.isShow
  store.dispatch(homeActionCreators.set_desktop_apps_show_control(desktopAppsShowControl))
  store.dispatch(mainActionCreators.set_context_menu_box([],false,null))  //关闭右键菜单

}
/*
 * 是否进入菜单
 */
export const toggleEnterContextMenu = (value) => {
  store.dispatch(mainActionCreators.toggle_enter_context_menu(value))
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