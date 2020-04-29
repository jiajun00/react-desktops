import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { View } from 'react-desktop';
import ToolTip from 'react-portal-tooltip';
import { actionCreators } from './store/index';

import WindowsMac from "../../../components/windows/WindowsMac"
import AppCenter from "../../../components/menu/AppCenter";
import DateComponent from "../../../components/block/DateComponent";
import Iframe from "../../../components/block/Iframe";
import {actionCreators as actionCreatorsHomeMac} from "./store";

class HomeTlp extends Component {
  constructor(props){
    super(props)
    window.onmouseup = (e) => this.props.mouseClick(e,this.props.isEnterMenu,this.props.isEnterMenuNav,this.props.openMenuNav)
  }
  render() {
    const {
      homeNav,tools,openWindowList,setWindowOpenList,appCenter,isEnterMenu,isEnterMenuNav,toggleAppCenter,
      handleOpenNav,mouseEnterMenuNav,mouseLeaveMenuNav,closeWindow,hiddenWindow
    } = this.props
    return (
      <View
        width="100%"
        height="100%"
        layout="vertical"
        style={{
          backgroundSize:'cover',
          background: `url(${require("../../../public/imgs/wolf.jpg")}) no-repeat center center / cover`

        }}>
        {/**顶部面板开始**/}
        <View
          width="100%"
          background="#1D2841"
          padding="0px 10px"
          layout="horizontal"
          style={{color:"#fff", fontSize:"large"}}>
          {/**左边应用程序开始区域**/}
          <View
            width="30%"
            height="26px"
            layout="horizontal"
            horizontalAlignment="left"
            className="mac_home_menu_left">
              <AppCenter/>
          </View>
          {/*=左边应用程序开始区域结束=*/}
          {/**中间时间区域开始**/}
          <View
              width="40%"
              height="26px"
              layout="horizontal"
              horizontalAlignment="center"
              className="mac_home_menu_center">

            <View padding="0 8px">
              <DateComponent setDataTime={this.props.setDataTime} dataTime={this.props.dataTime}/>
            </View>
          </View>
          {/*==中间时间区域结束==*/}
          {/**右边用户信息区域开始**/}
          <View
            width="30%"
            height="26px"
            layout="horizontal"
            horizontalAlignment="right"
            className="mac_home_menu_right">
            <View
                className="mac_home_menu_logo"
                style={{
                  backgroundSize:'cover',
                  background: `url(${require("../../../public/imgs/logo-tlp-220X220.png")}) no-repeat center center / cover`

                }}
                onClick={(e)=>{handleOpenNav(e,homeNav,'home')}}/>
          </View>
          {/*==右边用户信息区域结束==*/}
        </View>
        {/*==顶部面板结束==*/}
        <View
          width="100%"
          height="100%"
          style={{overflow:'hidden',background:'inherit'}}>
          {/**Dock开始**/}
          <View
              layout="vertical"
              verticalAlignment="center"
              height="auto"
              className="mac_home_tools">
            <View>
              <span
                className="mac_home_tools_navs">
                {tools.map((row)=>(
                  <View
                    onClick={()=>{setWindowOpenList(row,openWindowList)}}
                    key={row.type}
                    className={openWindowList.find(list=>(list.type===row.type)) ? "mac_home_tools_nav active" : "mac_home_tools_nav"}
                  >
                    <img width={50} height={45} src={row.logo} alt={row.name}/>
                  </View>
                ))}
              </span>
            </View>
          </View>
          {/*==Dock结束==*/}
          {/*
          <View
            width="100%"
            height="100%">
            这是个啥子呢
          </View>
          */}
        </View>
        {/**打开窗口开始**/}
        {openWindowList.map((row)=>(
          <WindowsMac
            id={row.id}
            key={row.id}
            window={row}
            zIndex={row.zIndex}
            openWindowList={openWindowList}
            setWindowIndex={this.props.setWindowOpenList}
            closeWindow={closeWindow}
            hiddenWindow={hiddenWindow}
          >
            {row.isIframe &&
            <Iframe title={row.type} frameBorder={0} style={{background:'#fff'}} width="100%" src={row.url} isLoad={row.isLoad} onLoad={()=>{this.props.loadWindow(row,openWindowList)}}/>
            }
          </WindowsMac>
        ))}
        {/*==打开窗口结束==*/}
      </View>
    )
  }

}






const initMapStateToProps = (state) => ({
  homeNav:state.getIn(['homeMac','homeNav']).toJS(),
  openWindowList: state.getIn(['homeMac','openWindowList']).toJS(),
  tools:state.getIn(['homeMac','tools']).toJS(),
  openMenuNav:state.getIn(['homeMac','openMenuNav']).toJS(),
  isEnterMenuNav:state.getIn(['homeMac','isEnterMenuNav']),
  isEnterMenu:state.getIn(['homeMac','isEnterMenu']),
  dataTime:state.getIn(['homeMac','dataTime']).toJS()
})

const initMapDispatchToProps = (dispatch) => ({

  /*
   * 添加或显示窗口列表
   */
  setWindowOpenList(window,openWindowList){
    dispatch(actionCreators.setWindowOpenList(window,openWindowList))
  },
  /*
   * 窗口读取完成
   */
  loadWindow(window,openWindowList){
    dispatch(actionCreators.loadWindow(window,openWindowList))
  },
  /*
   * 关闭窗口
   */
  closeWindow(type,openWindowList){
    dispatch(actionCreatorsHomeMac.closeWindow(type,openWindowList))
  },
  /*
   * 隐藏窗口
   */
  hiddenWindow(window,windowList){
    dispatch(actionCreatorsHomeMac.hiddenWindow(window,windowList))
  },
  /*
   * 访问菜单
   */
  handleOpenNav(e,menuNav,type='nav'){
    e.preventDefault()
    dispatch(actionCreators.handleOpenNav(e,menuNav,type))
  },
  /*
   * 鼠标进入菜单栏
   */
  mouseEnterMenuNav(){
    dispatch(actionCreators.mouseEnterMenuNav())
  },
  /*
   * 鼠标离开菜单选择栏
   */
  mouseLeaveMenuNav(){
    dispatch(actionCreators.mouseLeavelMenuNav())
  },
  /*
   * 鼠标点击
   */
  mouseClick(e,isEnterMenu,isEnterMenuNav,openMenuNav){
    e.preventDefault()
    if(isEnterMenu && !isEnterMenuNav){
      dispatch(actionCreators.clearMenuNav())
    }
    if(!isEnterMenu && !isEnterMenuNav && Object.keys(openMenuNav).length>0){
      dispatch(actionCreators.clearMenuNav())
    }
  },
  /*
   * 设置日期
   * @param Object dataTime 时间对象 {year:'0000',month:'00',day:'00',hour:'00',minute:'00',week:''}
   */
  setDataTime(dataTime){
    dispatch(actionCreators.setDateTime(dataTime))
  }
})

export default connect(initMapStateToProps,initMapDispatchToProps)(HomeTlp)