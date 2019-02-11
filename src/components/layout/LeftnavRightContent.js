import React, {Component} from 'react'
import { View } from 'react-desktop'
import {calc_empty_list} from "../../public/utils/com";
class LeftnavRightContent extends Component {
  constructor(props){
    super(props)
    this.moving = false
  }
  state = {}
  componentDidMount(){
    window.addEventListener('mouseup',this.mouseMoveUp)
  }
  componentWillUnmount() {
    window.removeEventListener('mouseup',this.mouseMoveUp)
  }
  render() {
    const borderDivStyle={
      cursor:'col-resize',
      padding:'0 1px',
    }
    const borderCenter = {
      backgroundColor:'#eee',
      boxShadow: '0 0 1px rgba(255,255,255,0.4)'
    }
    if(this.props.borderCenter){
      borderCenter.background=this.props.borderCenter
    }
    const leftStyle={
      width:'250px',
      background:'#fff'
    }
    const rightStyle={
      width:'calc(100% - 258px)',
      background:'#F0F2F5',
      overflowX: 'scroll',
      overflowY: 'hidden'
    }
    return (
      <View
        width="100%"
        layout="horizontal"
        horizontalAlignment="left"
        height="100%"
      >
        <div id='layoutLeft' ref={layoutLeft => this.layoutLeft=layoutLeft} style={leftStyle}>
          {this.props.children.find((row) => (
            row.type === 'nav'
          ))}
        </div>
        <View
          heigtht="100%"
          style={borderDivStyle}
          onMouseDown={this.mouseMoveDown}
        >
          <View width="2" style={borderCenter}/>
        </View>
        <div id='layoutRight' ref={layoutRight => this.layoutRight=layoutRight} style={rightStyle}>
          {this.props.children.find((row) => (
            row.type === 'main'
          ))}
        </div>
      </View>
    )
  }
  /*
   * 鼠标点击移动开始
   */
  mouseMoveDown = (e) => {
    e.stopPropagation() //防止事件冒泡
    this.layoutLeftWidth = this.layoutLeft.offsetWidth
    this.layoutRightWidth = this.layoutRight.offsetWidth
    this.moveStartX = e.clientX
    this.moving = true
    window.addEventListener('mousemove',this.moveLayoutLeftRightWidth)
  }
  moveLayoutLeftRightWidth = (e) => {
    e.stopPropagation()
    if(this.moving){
      const moveEndX = e.clientX
      const LeftWidth = this.layoutLeftWidth + (moveEndX - this.moveStartX)
      const RightWidth = this.layoutRightWidth - (moveEndX - this.moveStartX)
      if(LeftWidth>120 && RightWidth>200){
        if(this.props.fileLists && this.props.emptyLists){
          const list = calc_empty_list(RightWidth,90,this.props.fileLists.length,this.props.emptyLists.length)
          if(list) {
            this.props.emptyList(list)
          }
        }
        this.layoutLeft.style.width = LeftWidth + 'px'
        this.layoutRight.style.width = `calc(100% - ${LeftWidth+8}px)`
      }
    }
  }
  mouseMoveUp = () => {
    this.moving = false
    this.moveStartX = null
    this.layoutLeftWidth = null
    this.layoutRightWidth = null
    window.removeEventListener('mousemove',this.moveLayoutLeftRightWidth)
  }
}


export default LeftnavRightContent