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