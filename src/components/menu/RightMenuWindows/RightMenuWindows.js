import React, {Component} from 'react'
import { Nav } from '@alifd/next'
import { menuLogo } from '../../../public/utils/com'

const { Item, SubNav } = Nav
const { openWindow,refreshCurrentPage,selectContextMenuType,toggleEnterContextMenu,handleShowDesktopApps } = require("../../../windows/common/rightMenu")


const NavItem = (props) => {
  return (
    <div
      className={props.row.line?"right_menu_windows_li right_menu_windows_line":"right_menu_windows_li"}
    >
      <div className="right_menu_windows_li_img">
        {menuLogo(props.row.logo)}
      </div>
      <div>{props.row.name}</div>
    </div>
  )
}


class RightMenuWindows extends Component {

  state = {
    contextStyle:{}
  }
  componentDidMount(){
    this.init_menu(this.props.contextStyle)
  }
  shouldComponentUpdate(newProps, newState) {
    if(newProps.contextStyle !== this.props.contextStyle){
      this.init_menu(newProps.contextStyle)
    }

    return true
  }
  render() {
    const {
      mainContextMenu
    } = this.props
    const {contextStyle} = this.state
    const navStyle={
      width: 180
    }
    return (
      <div
        className="right_menu_windows"
        ref={node=>this.right_menu=node}
        style={contextStyle}
        onMouseEnter={()=>{toggleEnterContextMenu(true)}}
        onMouseLeave={()=>{toggleEnterContextMenu(false)}}
      >
        <Nav style={navStyle}  mode="popup" popupAlign="follow" triggerType="hover">
          {this.tree(mainContextMenu)}
        </Nav>
      </div>
    )
  }
  init_menu = (style) => {
    if(style.left + 180 > window.innerWidth){
      style.left -=180
    }
    if(style.top + this.right_menu.offsetHeight > window.innerHeight - 37){
      style.top  -=  this.right_menu.offsetHeight
    }
    this.setState({
      contextStyle:style
    })
  }
  tree = (data) => {
    const {desktopAppsShowControl} = this.props
    return data.map((row)=>{
      if(row.children){
        return (
          <SubNav
            key={row.type}
            label={
              <NavItem row={row}/>
            }
          >
            {this.tree(row.children)}
          </SubNav>
        )
      }else{
        return (
          <Item
            key={row.type}
            className="right_menu_windows_sub_nav"
            onClick={()=>{
              if(row.func){
                row.func.type === 'openWindow' && openWindow(row.func.runFunctionType, row.func.value)
                row.func.type === 'refresh' &&  row.func.runFunctionType === 'refreshCurrentPage' && refreshCurrentPage()
                row.func.type === 'select' && row.func.runFunctionType === 'selectContextMenuType' && !row.logo.value && selectContextMenuType(row.func.group,row.type,row.func.position)
                row.func.type === 'isShow' && row.func.runFunctionType === 'handleShowDesktopApps' && handleShowDesktopApps(row.func.group,row.type,row.func.position)

              }
            }}
          >
            <NavItem row={row} desktopAppsShowControl={desktopAppsShowControl}/>
          </Item>
        )
      }
    })
  }
}


export default RightMenuWindows