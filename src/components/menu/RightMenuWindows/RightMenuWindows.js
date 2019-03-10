import React, {Component} from 'react'
import { Nav,Icon } from '@alifd/next'

const { Item, SubNav } = Nav

const NavItem = (props) => {
  const { openWindow,refreshCurrentPage } = require("../../../windows/common/rightMenu")
  let logo = null
  if(props.row.logo){
    switch (props.row.logo.type){
      case 'point':
        if(props.row.logo.value){
          logo = <p/>
        }
        break;
      case 'icon':
        logo = <Icon size="xs" type={props.row.logo.value}/>
        break;
      case 'image':
        logo = <img src={props.row.logo.value} alt={props.row.logo.type}/>
        break;
      default:
        logo = null;
        break;
    }
  }
  return (
    <div
      className={props.row.line?"right_menu_windows_li right_menu_windows_line":"right_menu_windows_li"}
      onClick={()=>{
        props.row.func && props.row.func.type === 'openWindow' && openWindow(props.row.func.runFunctionType, props.row.func.value)
        props.row.func && props.row.func.type === 'refresh' &&  props.row.func.runFunctionType === 'refreshCurrentPage' && refreshCurrentPage()
      }}
    >
      <div className="right_menu_windows_li_img">
        {logo}
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
      mainContextMenu,
      set_context_menu
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
        onMouseEnter={()=>{set_context_menu(mainContextMenu,true,this.right_menu,2,true)}}
        onMouseLeave={()=>{set_context_menu(mainContextMenu,true,this.right_menu,2,false)}}
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
          <Item key={row.type} className="right_menu_windows_sub_nav">
            <NavItem row={row}/>
          </Item>
        )
      }
    })
  }
}


export default RightMenuWindows