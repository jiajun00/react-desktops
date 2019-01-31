import React, {Component} from 'react'
import { View } from 'react-desktop'
import {connect} from "react-redux";
import {actionCreators} from "./store";

import "../../../public/style/windows/index.scss"

import desktopImage from "../../../public/images/home/desktop-2.jpg"
import StartMenuWindows from "../../../components/menu/StartMenuWindows";
import MessageBox from "../../../components/block/MessageBox";
import StartBoxWindows from "../../../components/menu/StartBoxWindows";
import DesktopApps from "../../../components/block/DesktopApps";

class HomeWindows extends Component {

  state = {}

  componentDidMount(){
    import("../../../public/style/theme/windows-theme-black.scss")
  }

  render() {
    const {
      dataTime,isOpenMessageBox,isOpenStartBox,
      setDataTime,openMessageBox,closeMessageBox,openStartBox,closeStartBox
    } = this.props
    return (
      <View
        width="100%"
        height="100%"
        layout="vertical"
        background={"url("+desktopImage+") no-repeat center center / cover"}
        style={{backgroundSize:'cover',overflow:'hidden'}}
      >
        <View
          width="100%"
          height="100%"
          layout="vertical"
          className="desktop"
        >
          <DesktopApps/>
          <StartBoxWindows isOpenStartBox={isOpenStartBox} openStartBox={openStartBox} closeStartBox={closeStartBox}/>
          <MessageBox isOpenMessageBox={isOpenMessageBox} openMessageBox={openMessageBox} closeMessageBox={closeMessageBox}/>
        </View>
        <StartMenuWindows
          dataTime={dataTime}
          isOpenMessageBox={isOpenMessageBox}
          closeMessageBox={closeMessageBox}
          openMessageBox={openMessageBox}
          setDataTime={setDataTime}
          isOpenStartBox={isOpenStartBox}
          openStartBox={openStartBox}
          closeStartBox={closeStartBox}
        />
      </View>
    )
  }
}

const initMapStateToProps = (state) => ({
  dataTime:state.getIn(['homeWindows','dataTime']).toJS(),
  isOpenMessageBox:state.getIn(['homeWindows','isOpenMessageBox']),
  isOpenStartBox:state.getIn(['homeWindows','isOpenStartBox'])
})

const initMapDispatchToProps = (dispatch) => ({
  /*
   * 设置日期
   * @param Object dataTime 时间对象 {year:'0000',month:'00',day:'00',hour:'00',minute:'00',week:''}
   */
  setDataTime(dataTime){
    dispatch(actionCreators.setDateTime(dataTime))
  },
  /*
   * 打开消息框
   */
  openMessageBox(){
    dispatch(actionCreators.openMessageBox())
  },
  /*
   * 打开消息框
   */
  closeMessageBox(){
    dispatch(actionCreators.closeMessageBox())
  },
  /*
   * 打开开始菜单
   */
  openStartBox(){
    dispatch(actionCreators.openStartBox())
  },
  /*
   * 关闭开始菜单
   */
  closeStartBox(){
    dispatch(actionCreators.closeStartBox())
  }
})

export default connect(initMapStateToProps,initMapDispatchToProps)(HomeWindows)