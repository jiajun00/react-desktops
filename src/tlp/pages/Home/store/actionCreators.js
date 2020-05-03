import { fromJS } from 'immutable'
import * as constants from './constants'
import {actionCreators} from "./index";
import {URL_GET_APP_LIST, URL_GET_APP_CATEGORY_LIST} from "./constants";
import axios from 'axios';

/*
 * 添加窗口
 */
export const addWindowList = (list) => ({
  type: constants.ADD_WINDOW_LIST,
  openWindowList: fromJS(list)
})
/*
 * 打开的菜单栏
 * @param Object menuNav 菜单项
 */
export const openMenuNav = (menuNav) => ({
  type: constants.OPEN_MENU_NAV,
  menuNav: fromJS(menuNav)
})
/*
 * 清空访问菜单栏数据
 */
export const clearMenuNav = () => ({
  type: constants.CLEAR_MENU_NAV,
  isEnterMenu:false,
  isEnterMenuNav:false,
  openMenuNav: fromJS({})
})
/*
 * 鼠标进入菜单栏
 */
export const mouseEnterMenu = () => ({
  type: constants.MOUSE_ENTER_MENU,
  isEnterMenu: true
})
/*
 * 鼠标离开菜单栏
 */
export const mouseLeavelMenu = () => ({
  type: constants.MOUSE_LEAVEL_MENU,
  isEnterMenu: false
})
/*
 * 鼠标进入菜单选择栏
 */
export const mouseEnterMenuNav = () => ({
  type: constants.MOUSE_ENTER_MENU_NAV,
  isEnterMenuNav: true
})
/*
 * 鼠标离开菜单选择栏
 */
export const mouseLeavelMenuNav = () => ({
  type: constants.MOUSE_LEAVEL_MENU_NAV,
  isEnterMenuNav: false
})

/*
 * 关闭窗口
 * @param string type 窗口类型
 */
export const closeWindow = (type,openWindowList) => {
  const index = openWindowList.findIndex((row)=>{
    return row.type === type
  })
  const list = openWindowList
  list.splice(index,1)
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
  windowList[index].isShow = false
  return{
    type:constants.HIDDEN_WINDOW,
    windowList:fromJS(windowList)
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
 * 设置日期
 */
export const setDateTime = (dataTime) => ({
  type:constants.SET_DATE_TIME,
  dataTime: fromJS(dataTime)
})
/*
 * 处理增加或者显示窗口数据
 * @param window Object 窗口对象
 * @param array openWindowList 已打开窗口列表
 */
export const setWindowOpenList = (window,openWindowList) => {
  return (dispatch) => {
    const openWindowIndex = openWindowList.findIndex((row) => {
      return row.id === window.id
    })
    let list = openWindowList
    if (openWindowIndex >= 0) { //判断窗口是否已打开
      const zIndexMax = Math.max.apply(Math, openWindowList.map((o) => o.zIndex))
      const zIndex = openWindowList[openWindowIndex].zIndex
      list[openWindowIndex].isShow = true
      if (zIndexMax !== zIndex) {  //点击窗口不是最顶层窗口
        list.forEach((row, i) => {
          if (i === openWindowIndex) {
            list[i].zIndex = (openWindowList.length * 10) - 10
            list[i].isTop = true  //是否为最顶层
          } else {
            list[i].zIndex = row.zIndex - 10
            list[i].isTop = false
          }
        })
      }
      dispatch(actionCreators.showWindow(list))
    } else {
      list.forEach((row, i) => {
        list[i].isTop = false
      })
      let windowObj = window
      windowObj.zIndex = list.length * 10
      windowObj.isTop = true
      windowObj.isLoad = false
      list.push(windowObj)
      dispatch(actionCreators.addWindowList(list))
    }
  }
}
/*
 * 鼠标访问菜单
 */
export const handleOpenNav = (e,menuNav,type='nav') => {
  return (dispatch)=> {
    let menu = menuNav
    const style = {
      top:e.currentTarget.offsetTop+26,
      left:e.currentTarget.offsetLeft
    }
    if(type==='nav'){
      style.left += 33
    }
    menu.style = style
    dispatch(actionCreators.openMenuNav(menu))
    dispatch(actionCreators.mouseEnterMenu())
  }
}

/**
 *
 * 获取应用列表
 * ***/
export  const  getAppList = (processData) => {
  axios.get(URL_GET_APP_LIST).then((res) => {
    let data = res.data;
    if(data.code == 200) {
      data = data.data;
      processData(data);
    }else {
    }
  }).catch((res) => {
  })
}

/**
 *
 * 获取应用类型列表
 * ***/
export  const  getAppCategoryList = (processData) => {
  axios.get(URL_GET_APP_CATEGORY_LIST).then((res) => {
    let data = res.data;
    if(data.code == 200) {
      data = data.data;
      processData(data);
    }else {
    }
  }).catch((res) => {
  })
}

/**
 * 设置应用列表
 * **/
export  const  setAppList = (appList) => ({
  type:constants.SET_APP_LIST,
  data: fromJS(appList)
})

