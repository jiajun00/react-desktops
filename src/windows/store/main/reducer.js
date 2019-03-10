import defaultState from './state'
import { constants } from './index'

export default (state = defaultState, action) => {
  switch (action.type){
    case constants.SET_CONTEXT_MENU: //设置右键菜单
      return state.merge({
        'isOpenContextMenu':action.isShow,
        'contextMenu':action.data,
        'contextStyle':action.style,
        'isEnterContextMenu':action.isEnterContextMenu
      })
    default:
      return state;
  }
}