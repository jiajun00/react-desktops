import React, {Component} from 'react'
import {connect} from "react-redux";
import {actionCreators} from "../../../../windows/pages/FileManage/store"

import File from "../../../../components/file/File"
import ContentRight from "../../../../components/content/ContentRight"

class FileContent extends Component {

  state = {}

  render() {
    const {
      menuList,match,match_old,emptyLists,history,
      emptyList,setFileList
    } = this.props
    const fileLists = []  //文件列表
    let i = 0
    menuList.list.forEach(row=>{
      if(row.pid === parseInt(match.params.id)){
        fileLists[i] = row
        i++
      }
    })
    return (
      <ContentRight
        match={match}
        match_old={match_old}
        className="file_manage"
        menuList={menuList}
        isFile
      >
        <File
          history={history}
          match={match_old}
          fileLists={fileLists}
          emptyLists={emptyLists}
          emptyList={emptyList}
          setFileList={setFileList}
        />
      </ContentRight>
    )
  }
}

const initMapStateToProps = (state) => ({
  emptyLists:state.getIn(["fileManage","emptyLists"]).toJS(),
  menuList:state.getIn(["fileManage","menuList"]).toJS(),
})

const initMapDispatchToProps = (dispatch) => ({
  /*
   * 设置空文件占位列表
   */
  emptyList(list){
    dispatch(actionCreators.empty_list(list))
  },
  /*
   * 排序文件列表
   */
  setFileList(list){
    dispatch(actionCreators.set_file_list(list))
  }
})

export default connect(initMapStateToProps,initMapDispatchToProps)(FileContent)