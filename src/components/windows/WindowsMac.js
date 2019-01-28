import React, {Component, Fragment} from 'react'
import { View,Window,TitleBar } from 'react-desktop'
import { connect } from 'react-redux'
import { actionCreators as actionCreatorsHomeMac } from '../../mac/pages/Home/store';
const WindowOffsetWidth = window.innerWidth
const WindowOffsetHeight = window.innerHeight
let lastWindowStyleState = null //记录前一次设置的屏幕属性
class WindowsMac extends Component {
  constructor(props){
    super(props)
    this.moving = false
    this.type=''
    this.width = WindowOffsetWidth-105 + 'px'
    this.height = WindowOffsetHeight-50 + 'px'
    this.windowTop = 26
    this.windowLeft= 80
  }
  state = {
    isFullScreen:false,

  }
  componentDidMount(){
    window.addEventListener('mouseup',this.mouseUp)
  }
  componentWillUnmount(){
    window.removeEventListener('mouseup',this.mouseUp)
  }
  shouldComponentUpdate(newProps,newState) {
    if(newProps.zIndex !== this.props.zIndex){
      return true
    }
    if(newProps.window !== this.props.window){
      return true
    }
    if(newState.isFullScreen !== this.state.isFullScreen){
      return true
    }
    return false
  }
  render() {
    const { isFullScreen } = this.state
    const showWindowStyleProperty = this.props.window.isShow ? "visible" : "hidden"
    const windowStyle = {
      position:'absolute',
      display:'block',
      top:this.windowTop+"px",
      left:this.windowLeft+"px",
      width:this.width,
      height:this.height,
      zIndex:this.props.zIndex,
      visibility: showWindowStyleProperty
    }
    const buttonStyle={
      width: '50px',
      height: '50px',
      position: 'absolute',
      bottom: '-15px',
      right: '-15px',
      cursor: 'se-resize',
      zIndex: this.props.zIndex+9
    }

    const showCover = this.props.window.isTop ? 'none' : 'block'
    const cover={
      width:'100%',
      height:'100%',
      position:'absolute',
      zIndex:this.props.zIndex+8,
      display: showCover
    }
    return (
      <Fragment>
        <span
            style={windowStyle}
            ref={e => this.window = e}
          >
        <Window
          chrome
          width="100%"
          height="100%"
          padding="0px"
        >
          <TitleBar
            title={this.props.window.name}
            controls
            isFullscreen={isFullScreen}
            onCloseClick={() => {
              this.props.closeWindow(this.props.window.type,this.props.openWindowList)
            }}
            onMinimizeClick={()=>this.props.hiddenWindow(this.props.window,this.props.openWindowList)}
            onResizeClick={() => {
              this.handleClickSetScreen()
            }}
            onMouseDown={e => {
              this.mouseMoveDown(e,'position')
              this.props.setWindowIndex(this.props.window,this.props.openWindowList)
            }}
          />
          <View
            padding="0px"
            width="100%"
            style={{overflow: 'scroll'}}
          >
            {this.props.children}
          </View>
          <div
            ref={el=>this.windowCover=el}
            style={cover}
            onClick={()=>this.props.setWindowIndex(this.props.window,this.props.openWindowList)}
          />
        </Window>
          {!isFullScreen &&
          <span
            onMouseDown={e => {
              this.mouseMoveDown(e,'wh')
              this.props.setWindowIndex(this.props.window,this.props.openWindowList)
            }}
            style={buttonStyle}
          />
          }
        </span>

      </Fragment>

    )
  }
  setZIndex = (zIndex) => {
    this.setState({
      zIndex
    })
  }
  mouseMoveDown = (e,type) => {
    if(!this.state.isFullScreen) {
      e.stopPropagation() //防止事件冒泡
      this.windowWidth = this.window.offsetWidth
      this.windowHeight = this.window.offsetHeight
      this.moveStartX = e.clientX
      this.moveStartY = e.clientY
      this.moving = true
      this.type = type
      window.addEventListener('mousemove', this.mouseMove)
      this.windowCover.style.display = 'block'
    }
  }
  moveDivWeightHeight = (e) => {
    e.preventDefault();
    if(this.moving){
      const moveEndX = e.clientX
      const moveEndY = e.clientY
      const width = this.windowWidth + moveEndX - this.moveStartX
      const height = this.windowHeight + moveEndY - this.moveStartY
      if(width>460 &&  width<(WindowOffsetWidth-77)){
        this.window.style.width = width + 'px'
      }
      if(height>400 && height<(WindowOffsetHeight-26)){
        this.window.style.height = height + 'px'
      }
    }
  }
  /*
   * 控制全屏
   */
  handleClickSetScreen = () => {
    const { isFullScreen } = this.state
    if(isFullScreen){
      this.setState({
        isFullScreen:false
      },()=>{
        this.window.style.width = lastWindowStyleState.width
        this.window.style.height = lastWindowStyleState.height
        this.window.style.left = lastWindowStyleState.left
        this.window.style.top = lastWindowStyleState.top
        this.window.style.zIndex = lastWindowStyleState.zIndex
        lastWindowStyleState = null
      })
    }else{
      lastWindowStyleState = {...this.window.style}
      this.setState({
        isFullScreen:true
      },()=>{
        this.window.style.width = WindowOffsetWidth + 'px'
        this.window.style.height = WindowOffsetHeight + 'px'
        this.window.style.top = '0px'
        this.window.style.left = '0px'
        this.window.style.zIndex = '10'
      })
    }
  }
  /*
   * 显示和隐藏窗口
   */
  toggleWindowShow = () => {
    this.setState({
      showWindow:!this.state.showWindow
    })
  }
  mouseMovePosition = (e) => {
    e.preventDefault();
    const mouseEndX = e.clientX
    const mouseEndY = e.clientY
    this.windowLeftEnd = this.windowLeft + mouseEndX - this.moveStartX;
    this.windowTopEnd = this.windowTop + mouseEndY - this.moveStartY;
    if(this.windowTopEnd<26){  //防止移动和工具栏重叠
      this.windowTopEnd = 26
    }
    if(this.windowTopEnd>=(document.body.clientHeight - 26)){
      this.windowTopEnd = document.body.clientHeight - 26
    }
    if(this.windowLeftEnd<(80 - this.windowWidth)){
      this.windowLeftEnd = 80 - this.windowWidth
    }
    if(this.windowLeftEnd>=(document.body.clientWidth - 80)){
      this.windowLeftEnd = document.body.clientWidth - 80
    }
    this.window.style.top=this.windowTopEnd + 'px'
    this.window.style.left=this.windowLeftEnd + 'px'
  }
  mouseMove = (e) => {
    e.preventDefault();
    if(this.moving){
      if(this.type === 'position'){
        this.mouseMovePosition(e)
      }
      if(this.type === 'wh'){
        this.moveDivWeightHeight(e)
      }
    }
  }
  mouseUp = () => {
    this.moving = false
    if(this.type === 'position'){
      this.windowLeft = this.windowLeftEnd
      this.windowTop = this.windowTopEnd
      this.windowCover.style.display = 'none'
    }
    if(this.type === 'wh'){
      this.moveStartX = null
      this.moveStartY = null
      this.windowWidth = null
      this.windowHeight = null
      this.windowCover.style.display = 'none'
    }
    this.type = ''
    window.removeEventListener('mousemove',this.mouseMove)
  }
}

const initMapStateToProps = (state) => ({
  openWindowList:state.getIn(['homeMac','openWindowList']).toJS(),
})
const initMapDispatchToProps = (dispatch) => ({
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
  }
})

export default connect(initMapStateToProps,initMapDispatchToProps)(WindowsMac)