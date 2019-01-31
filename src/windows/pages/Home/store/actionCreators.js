import { fromJS } from 'immutable'
import * as constants from './constants'

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