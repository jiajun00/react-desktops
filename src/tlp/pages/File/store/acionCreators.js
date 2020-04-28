import { fromJS } from 'immutable'
import * as constants from './constants'

/*
 * 设置空文件占位列表
 */
export const empty_list = (list) => {
  return {
    type: constants.EMPTY_LIST,
    list: fromJS(list)
  }
}
/*
 * 排序文件列表
 */
export const set_file_list = (list) => {
  return {
    type: constants.SET_FILE_LIST,
    list: fromJS(list)
  }
}