import { fromJS } from 'immutable'
import * as constants from './constants'
// import {actionCreators} from "./index"


/*
 * 设置右键菜单数据
 */
export const set_context_menu_box = (list,isShow,e,type=1,isEnter=true) => {
  let style
  if(type===1 && e){ //1为打开关闭右键菜单类型
    style = {
      top: e.clientY,
      left: e.clientX,
    }
  }else {
    style = {}
  }
  if(type===2){ //鼠标进入和移除类型
    style = {
      top:e.offsetTop,
      left: e.offsetLeft
    }
  }
  return {
    type:constants.SET_CONTEXT_MENU,
    data:fromJS(list),
    isShow:isShow,
    isEnterContextMenu:isEnter,
    style:fromJS(style)
  }
}