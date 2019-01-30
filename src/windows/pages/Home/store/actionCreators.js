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