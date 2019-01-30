import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { View } from 'react-desktop'
import { actionCreators } from './store/index'
import desktopImage from "../../../public/images/home/desktop-1.jpg"

import WindowsMac from "../../../components/windows/WindowsMac"
import NavMenuMac from "../../../components/menu/NavMenuMac";
import DateComponent from "../../../components/block/DateComponent";
import Iframe from "../../../components/block/Iframe";

class HomeMac extends Component {
  constructor(props){
    super(props)
    window.onmouseup = (e) => this.props.mouseClick(e,this.props.isEnterMenu,this.props.isEnterMenuNav,this.props.openMenuNav)
  }
  render() {
    const {
      homeNav,tools,openWindowList,setWindowOpenList,menuNav,isEnterMenu,isEnterMenuNav,openMenuNav,
      handleOpenNav,mouseEnterMenuNav,mouseLeaveMenuNav
    } = this.props
    return (
      <View
        width="100%"
        height="100%"
        layout="vertical"
        background={"url("+desktopImage+") no-repeat center center / cover"}
        style={{backgroundSize:'cover'}}
      >
        <View
          width="100%"
          background="#1D2841"
          padding="0px 10px"
          layout="horizontal"
          style={{color:"#fff"}}
        >
          <View
            width="60%"
            height="26px"
            layout="horizontal"
            horizontalAlignment="left"
            className="mac_home_menu_left"
          >
            <View
              className="mac_home_menu_logo"
              onClick={(e)=>{handleOpenNav(e,homeNav,'home')}}
            >
              <i className="iconfont"
                 dangerouslySetInnerHTML={{__html: homeNav.name}}
              />
            </View>
            <View
              layout="horizontal"
              horizontalAlignment="left"
              className="mac_home_menu_left_nav"
            >
              <dl
              >
                {menuNav.map((row, i) => (
                  <Fragment key={row.type}>
                    {i === 0 ?
                      <dt
                        className={row.type === openMenuNav.type ? "active" : ""}
                        onClick={(e)=>{handleOpenNav(e,row)}}
                      >
                        {row.name}
                      </dt>
                      :
                      <dd
                        className={row.type === openMenuNav.type ? "active" : ""}
                        onClick={(e)=>{handleOpenNav(e,row)}}
                      >
                        {row.name}
                      </dd>
                    }
                  </Fragment>
                ))
                }
              </dl>
            </View>
            {(isEnterMenu || isEnterMenuNav) &&
            <NavMenuMac
              style={openMenuNav.style}
              dataList={openMenuNav.nav}
              mouseEnter={mouseEnterMenuNav}
              mouseLeavel={mouseLeaveMenuNav}
            />
            }
          </View>
          <View
            width="40%"
            height="26px"
            layout="horizontal"
            horizontalAlignment="right"
            className="mac_home_menu_right"
          >
            <View
              padding="0 8px"
            >
              <DateComponent setDataTime={this.props.setDataTime} dataTime={this.props.dataTime}/>
            </View>
            <View
              padding="3px 8px"
            >
              <i className="iconfont">&#xe602;</i>
            </View>
            <View
              padding="3px 8px"
            >
              <i className="iconfont">&#xe614;</i>
            </View>
          </View>
        </View>
        <View
          width="100%"
          height="100%"
          style={{overflow:'hidden',background:'inherit'}}
        >
          <View
              layout="vertical"
              verticalAlignment="center"
              height="auto"
              className="mac_home_tools"
          >
            <View>
              <span
                className="mac_home_tools_navs"
              >
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
          <View
            width="100%"
            height="100%"
          >

          </View>
        </View>
        {openWindowList.map((row)=>(
          <WindowsMac
            id={row.type}
            key={row.type}
            window={row}
            zIndex={row.zIndex}
            openWindowList={openWindowList}
            setWindowIndex={this.props.setWindowOpenList}
          >
            {row.isIframe &&
            <Iframe title={row.type} frameBorder={0} style={{background:'#fff'}} width="100%" src={row.url} isLoad={row.isLoad} onLoad={()=>{this.props.loadWindow(row,openWindowList)}}/>
            }
          </WindowsMac>
        ))}

      </View>
    )
  }

}






const initMapStateToProps = (state) => ({
  homeNav:state.getIn(['homeMac','homeNav']).toJS(),
  openWindowList: state.getIn(['homeMac','openWindowList']).toJS(),
  tools:state.getIn(['homeMac','tools']).toJS(),
  menuNav:state.getIn(['homeMac','menuNav']).toJS(),
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

export default connect(initMapStateToProps,initMapDispatchToProps)(HomeMac)