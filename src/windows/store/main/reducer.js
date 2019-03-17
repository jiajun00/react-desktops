import defaultState from './state'
import { constants } from './index'

export default (state = defaultState, action) => {
  switch (action.type){
    case constants.SET_CONTEXT_MENU: //设置右键菜单
      return state.merge({
        'isOpenContextMenu':action.isShow,
        'contextMenu':action.data,
        'contextStyle':action.style,
      })
    case constants.IS_ENTER_CONTEXT_MENU://是否进入菜单
      return state.set('isEnterContextMenu',action.value)
    default:
      return state;
  }
}