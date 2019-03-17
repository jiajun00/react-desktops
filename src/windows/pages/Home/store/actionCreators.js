import { fromJS } from 'immutable'
import * as constants from './constants'
import {actionCreators} from "./index";

/*
 * 设置日期
 */
export const setDateTime = (dataTime) => ({
  type:constants.SET_DATE_TIME,
  dataTime: fromJS(dataTime)
})

/*
 * 打开消息框
 */
export const openMessageBox = () => ({
  type:constants.OPEN_MESSAGE_BOX,
  data:true
})
/*
 * 关闭消息框
 */
export const closeMessageBox = () => ({
  type:constants.CLOSE_MESSAGE_BOX,
  data:false
})
/*
 * 打开开始菜单
 */
export const openStartBox = () => ({
  type:constants.OPEN_START_BOX,
  data:true
})
/*
 * 关闭开始菜单
 */
export const closeStartBox = () => ({
  type:constants.CLOSE_START_BOX,
  data:false
})
/*
 * 关闭窗口
 * @param string type 窗口类型
 */
export const closeWindow = (type,openWindowList) => {
  const index = openWindowList.findIndex((row)=>{
    return row.type === type
  })

  let list = openWindowList
  const window = openWindowList[index]
  list.splice(index,1)
  let win = {
    zIndex:-1,
    i:-1
  }
  list.forEach((row,i)=>{
    if(row.zIndex > window.zIndex){
      list[i].zIndex = row.zIndex - 10
    }
    if(row.isShow === true){
      win.zIndex = row.zIndex
      win.i = i
    }
  })
  if(win.i>=0){
    list[win.i].isTop = true
  }

  return {
    type:constants.CLOSE_WINDOW,
    openWindowList:fromJS(list)
  }
}
/*
 * 隐藏窗口
 */
export const hiddenWindow = (window,windowList) => {
  const index = windowList.findIndex((row)=>(
    row.type === window.type
  ))
  let list = windowList

  let win = {
    zIndex:-1,
    i:-1
  }
  windowList.forEach((row,i)=>{
    list[i].zIndex += 10
    list[i].isTop = false
    if(i!==index && row.isShow === true && row.zIndex > win.zIndex){
      win.zIndex = row.zIndex
      win.i = i
    }
  })
  list[index].isShow = false
  list[index].zIndex = 10
  if(win.i >= 0){
    list[win.i].isTop = true
  }
  return{
    type:constants.HIDDEN_WINDOW,
    windowList:fromJS(list)
  }
}
/*
 * 显示窗口
 */
export const showWindow = (windowList) => ({
  type:constants.SHOW_WINDOW,
  windowList:fromJS(windowList)
})
/*
 * 添加窗口
 */
export const addWindowList = (list) => ({
  type: constants.ADD_WINDOW_LIST,
  openWindowList: fromJS(list)
})
/*
 * 处理增加或者显示窗口
 * @param window Object 窗口对象
 * @param array openWindowList 已打开窗口列表
 */
export const setWindowOpenList = (window,openWindowList) => {
  return (dispatch) => {
    const openWindowIndex = openWindowList.findIndex((row) => {
      return row.type === window.type
    })
    let list = openWindowList
    if (openWindowIndex >= 0) { //窗口已打开
      const zIndexMax = Math.max.apply(Math, openWindowList.map((o) => o.zIndex)) //当前最大层级
      if(!window.hasOwnProperty("zIndex")){
        window = openWindowList[openWindowIndex]
      }
      if (zIndexMax !== window.zIndex) {  //点击窗口不是最顶层窗口
        openWindowList.forEach((row, i) => {
          list[i].isTop = false
          if(row.zIndex >= window.zIndex){
            list[i].zIndex = row.zIndex - 10
          }
        })
      }
      list[openWindowIndex].zIndex = zIndexMax
      list[openWindowIndex].isTop = true  //最顶层
      list[openWindowIndex].isShow = true
      dispatch(actionCreators.showWindow(list))
    } else {  //新增窗口
      list.forEach((row, i) => {
        list[i].isTop = false
      })
      let windowObj = window
      windowObj.zIndex = (list.length+1) * 10
      windowObj.isTop = true
      windowObj.isLoad = false
      list.push(windowObj)
      dispatch(actionCreators.addWindowList(list))
    }
  }
}
/*
 * 读取窗口完成
 */
export const loadWindow = (window,openWindowList) => {
  const openWindowIndex = openWindowList.findIndex((row) => {
    return row.type === window.type
  })
  let list = openWindowList
  list[openWindowIndex].isLoad = true
  return {
    type: constants.LOAD_WINDOW,
    windowList:fromJS(list)
  }
}
/*
 * 设置桌面背景
 */
export const set_background = (type,value) => {
  const background = {
    type,
    value
  }
  return {
    type: constants.SET_BACKGROUND,
    backgroundDesk:fromJS(background)
  }
}

/*
 * 设置右键菜单列表
 */
export const set_context_menu_list = (list) => {
  return {
    type: constants.SET_CONTEXT_MENU_LIST,
    list:fromJS(list)
  }
}
/*
 * 设置桌面图标属性
 */
export const set_desktop_apps_show_control = (data) => {
  return {
    type: constants.SET_DESKTOP_APPS_SHOW_CONTROL,
    data:fromJS(data)
  }
}