import { fromJS } from 'immutable'
 import {constants} from "./index"


/*
 * 设置右键菜单数据
 */
export const set_context_menu_box = (list,isShow,e,type=1) => {
  let style
  if(type===1 && e){ //1为打开关闭右键菜单类型
    style = {
      top: e.clientY,
      left: e.clientX,
    }
  }else {
    style = {}
  }
  return {
    type:constants.SET_CONTEXT_MENU,
    data:fromJS(list),
    isShow:isShow,
    style:fromJS(style)
  }
}
/*
 * 鼠标是否进入菜单
 */
export const toggle_enter_context_menu = (value) => ({
    type:constants.IS_ENTER_CONTEXT_MENU,
    value
})
