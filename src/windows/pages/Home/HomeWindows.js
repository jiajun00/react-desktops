import React, { Component } from 'react'
import { View } from 'react-desktop'
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { actionCreators as mainActionCreators } from "../../store/main"

import "../../../public/style/windows/index.scss"

import StartMenuWindows from "../../../components/menu/StartMenuWindows";
import MessageBox from "../../../components/block/MessageBox";
import StartBoxWindows from "../../../components/menu/StartBoxWindows";
import DesktopApps from "../../../components/block/DesktopApps";
import WindowsWindows from "../../../components/windows/WindowsWindows";
import Iframe from "../../../components/block/Iframe";
import RightMenuWindows from "../../../components/menu/RightMenuWindows";


class HomeWindows extends Component {

  state = {}
  componentDidMount(){
    window.addEventListener("message", this.receiveMessage, false)
  }
  componentWillUnmount(){
    window.removeEventListener('message',this.receiveMessage)
  }
  render() {
    const {
      dataTime,isOpenMessageBox,isOpenStartBox,desktopApps,openWindowList,startBoxLeftApps,desktopAppsShowControl,startBoxRightApps,background,mainContextMenu,isOpenContextMenu,contextStyle,
      setDataTime,openMessageBox,closeMessageBox,openStartBox,closeStartBox,setWindowOpenList,closeWindow,hiddenWindow,set_context_menu
    } = this.props
    return (
      <View
        width="100%"
        height="100%"
        layout="vertical"
        background={background.type === 'image'?`url(${background.value}) no-repeat center center / cover`:background.value}
        style={{backgroundSize:'cover',overflow:'hidden'}}
      >
        <View
          width="100%"
          height="100%"
          layout="vertical"
          className="desktop"
          onContextMenu={(e)=>this.onContextMenu(e,'desktop')}
        >
          <DesktopApps
            desktopApps={desktopApps}
            setWindowOpenList={setWindowOpenList}
            desktopAppsShowControl={desktopAppsShowControl}
            openWindowList={openWindowList}
          />
          <StartBoxWindows
            isOpenStartBox={isOpenStartBox}
            openStartBox={openStartBox}
            setWindowOpenList={setWindowOpenList}
            openWindowList={openWindowList}
            closeStartBox={closeStartBox}
            startBoxLeftApps={startBoxLeftApps}
            startBoxRightApps={startBoxRightApps}
            background={background}
          />
          <MessageBox isOpenMessageBox={isOpenMessageBox} openMessageBox={openMessageBox} closeMessageBox={closeMessageBox}/>
        </View>
        <StartMenuWindows
          openWindowList={openWindowList}
          setWindowOpenList={setWindowOpenList}
          closeWindow={closeWindow}
          hiddenWindow={hiddenWindow}
          dataTime={dataTime}
          isOpenMessageBox={isOpenMessageBox}
          closeMessageBox={closeMessageBox}
          openMessageBox={openMessageBox}
          setDataTime={setDataTime}
          isOpenStartBox={isOpenStartBox}
          openStartBox={openStartBox}
          closeStartBox={closeStartBox}
        />
        {openWindowList.map((row)=>(
        <WindowsWindows
          id={row.type}
          key={row.type}
          window={row}
          zIndex={row.zIndex}
          openWindowList={openWindowList}
          setWindowIndex={setWindowOpenList}
          closeWindow={closeWindow}
          hiddenWindow={hiddenWindow}
        >
          {row.isIframe &&
          <Iframe title={row.type} frameBorder={0} style={{background:'#fff',height:'100%'}} width="100%" src={row.url} isLoad={row.isLoad} onLoad={()=>{this.props.loadWindow(row,openWindowList)}}/>
          }
        </WindowsWindows>
        ))}
        <RightMenuWindows
          mainContextMenu={mainContextMenu}
          isOpenContextMenu={isOpenContextMenu}
          contextStyle={contextStyle}
          set_context_menu={set_context_menu}
          desktopAppsShowControl={desktopAppsShowControl}
        />
      </View>
    )
  }
  receiveMessage =  ( event ) => {
    const self = this
    if(event.data.type === 'background_set'){
      self.props.set_background(event.data.value.type,event.data.value.value)
    }
  }
  onContextMenu(e,type){
    const { contextMenu,set_context_menu } = this.props
    e.preventDefault()
    if(type === 'desktop'){
      set_context_menu(contextMenu.desktops,true,e)
    }
  }
}

const initMapStateToProps = (state) => ({
  dataTime:state.getIn(['homeWindows','dataTime']).toJS(),
  isOpenMessageBox:state.getIn(['homeWindows','isOpenMessageBox']),
  isOpenStartBox:state.getIn(['homeWindows','isOpenStartBox']),
  desktopApps:state.getIn(['homeWindows','desktopApps']).toJS(),
  desktopAppsShowControl:state.getIn(['homeWindows','desktopAppsShowControl']).toJS(),
  openWindowList:state.getIn(['homeWindows','openWindowList']).toJS(),
  startBoxLeftApps:state.getIn(['homeWindows','startBoxLeftApps']).toJS(),
  startBoxRightApps:state.getIn(['homeWindows','startBoxRightApps']).toJS(),
  background:state.getIn(['homeWindows','background']).toJS(),
  contextMenu:state.getIn(['homeWindows','contextMenu']).toJS(),
  isOpenContextMenu:state.getIn(['mainWindows','isOpenContextMenu']),
  mainContextMenu:state.getIn(['mainWindows','contextMenu']).toJS(),
  contextStyle:state.getIn(['mainWindows','contextStyle']).toJS()
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
  },
  /*
   * 添加或显示窗口列表
   */
  setWindowOpenList(window,openWindowList){
    dispatch(actionCreators.setWindowOpenList(window,openWindowList))
  },
  /*
   * 关闭窗口
   */
  closeWindow(type,openWindowList){
    dispatch(actionCreators.closeWindow(type,openWindowList))
  },
  /*
   * 隐藏窗口
   */
  hiddenWindow(window,windowList){
    dispatch(actionCreators.hiddenWindow(window,windowList))
  },
  /*
   * 窗口读取完成
   */
  loadWindow(window,openWindowList){
    dispatch(actionCreators.loadWindow(window,openWindowList))
  },
  /*
  * 设置窗口背景
  */
  set_background(type,value){
    dispatch(actionCreators.set_background(type,value))
  },
  /*
   * 设置右键菜单
   */
  set_context_menu(list,isShow,e,type,isEnter){
    dispatch(mainActionCreators.set_context_menu_box(list,isShow,e,type,isEnter))
  }
})

export default connect(initMapStateToProps,initMapDispatchToProps)(HomeWindows)