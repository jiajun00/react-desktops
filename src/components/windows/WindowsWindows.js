import React, {Component, Fragment} from 'react'
import { Window,TitleBar,View } from 'react-desktop/windows'
import { Loading } from '@alifd/next'

const WindowOffsetWidth = window.innerWidth
const WindowOffsetHeight = window.innerHeight
let lastWindowStyleState = {} //记录前一次设置的屏幕属性

class WindowsWindows extends Component {
  constructor(props){
    super(props)
    this.init()
  }
  init(){
    const { window } = this.props
    this.moving = false
    this.type=''
    if(window.style){
      this.width = window.style.width
      this.height = window.style.height + 32
    }else{
      this.width =  1100
      this.height = WindowOffsetHeight-100
    }
    this.winTop = 26 + this.props.zIndex*2
    if(this.winTop + this.height > WindowOffsetHeight - 32){
      this.winTop = - 26 + this.props.zIndex*2
    }
    this.winLeft= (WindowOffsetWidth - this.width)/2 + this.props.zIndex*2
    this.winRight = null
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
  render() {
    const { isFullScreen } = this.state
    const {
      openWindowList,window,
      closeWindow,hiddenWindow,setWindowIndex
    } = this.props
    const windowStyle = {
      position:'absolute',
      width:this.width,
      height:this.height,
      overflow: 'hidden',
      transition: window.isShow ?'all 0.25s ease-out':'all 1s ease-in-out'
    }
    if(window.isShow){
      windowStyle.opacity = 1
      windowStyle.transform = 'scale(1,1)'
      windowStyle.visibility = 'visible'
      windowStyle.top=this.winTop
      windowStyle.left=this.winLeft
      windowStyle.zIndex=this.props.zIndex
    }else{
      windowStyle.opacity = 0
      windowStyle.transform = 'scale(0.6,0.8)'
      windowStyle.visibility = 'hidden'
      windowStyle.top= WindowOffsetHeight
      windowStyle.left=(WindowOffsetWidth - this.width)/2
      windowStyle.zIndex= -100
    }
    const titleBarStyle={
      position:'relative',
      zIndex:this.props.zIndex + 1
    }
    const titleBarCoverStyle = {
      position:'absolute',
      zIndex:this.props.zIndex + 2,
      height:32,
      width: 'calc(100% - 138px)',
      cursor:'move'
    }
    const leftWHStyle={
      width: 30,
      height: 30,
      position: 'absolute',
      bottom: -15,
      left: -15,
      cursor: 'sw-resize',
      zIndex: this.props.zIndex + 9
    }
    const rightWHStyle={
      width: 30,
      height: 30,
      position: 'absolute',
      bottom: -15,
      right: -15,
      cursor: 'se-resize',
      zIndex: this.props.zIndex + 9
    }
    const leftWidthButtonStyle = {
      width:15,
      height:'100%',
      position:'absolute',
      top:0,
      left:-9,
      cursor:'w-resize',
      zIndex: this.props.zIndex + 9
    }
    const rightWidthButtonStyle = {
      width:15,
      height:'100%',
      position:'absolute',
      top:0,
      right:-9,
      cursor:'e-resize',
      zIndex: this.props.zIndex + 9
    }

    const bottomHeightButtonStyle = {
      width:'100%',
      height:15,
      position:'absolute',
      left:0,
      bottom:-9,
      cursor:'s-resize',
      zIndex: this.props.zIndex + 9
    }
    const cover={
      width:'100%',
      height:'100%',
      position:'absolute',
      top:0,
      backgroundColor:'rgba(255,255,255,0.6)',
      zIndex:this.props.zIndex + 8,
      display: window.isTop ? 'none' : 'block'
    }
    const loading={
      width:'100%',
      height:'100%',
      display: 'block',
      position:'absolute'
    }
    return (

      <span style={windowStyle} ref={e => this.window = e}>
        <Window
            chrome
            width='100%'
            height='100%'
          >
            <TitleBar
              style={titleBarStyle}
              title={window.name}
              controls
              onMinimizeClick={()=>hiddenWindow(window,openWindowList)}
              onMaximizeClick={this.handleClickSetScreen}
              onCloseClick={() => {closeWindow(window.type,openWindowList)}}
            >
              <div
                onMouseDown={e => {
                  this.mouseMoveDown(e,'position')
                  setWindowIndex(window,openWindowList)
                }}
                style={titleBarCoverStyle}/>
            </TitleBar>

            <View
              padding="0px"
              width="100%"
              height='100%'
              style={{overflow: 'scroll',position:'absolute',borderTop:'1px solid #eee'}}
            >
            {!window.isLoad &&
            <Loading style={loading} tip="loading..."/>
            }
              {this.props.children}
          </View>
        </Window>
        <div
          ref={el=>this.windowCover=el}
          style={cover}
          onClick={()=>this.props.setWindowIndex(this.props.window,this.props.openWindowList)}
        />
        {window.isShow && !isFullScreen &&
        <Fragment>
          <span
            onMouseDown={e => {
              this.mouseMoveDown(e,'lw')
            }}
            style={leftWidthButtonStyle}
          />
          <span
            onMouseDown={e => {
              this.mouseMoveDown(e,'rw')
            }}
            style={rightWidthButtonStyle}
          />
          <span
            onMouseDown={e => {
              this.mouseMoveDown(e,'bh')
            }}
            style={bottomHeightButtonStyle}
          />
          <span
            onMouseDown={e => {
              this.mouseMoveDown(e,'lwh')
            }}
            style={leftWHStyle}
          />
          <span
            onMouseDown={e => {
              this.mouseMoveDown(e,'wh')
            }}
            style={rightWHStyle}
          />
        </Fragment>

        }
        </span>
    )
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
      if(type === 'lw' || type === 'lwh'){ //相对右边位置不存在时执行
        this.winRight = WindowOffsetWidth - this.winLeft - this.width
        this.window.style.right = this.winRight + 'px'
        this.window.style.left = null
      }
      window.addEventListener('mousemove', this.mouseMove)
      this.windowCover.style.display = 'block'
    }
  }
  moveDivWidthHeight = (e) => {
    e.preventDefault()
    if(this.moving){
      const moveEndX = e.clientX
      const moveEndY = e.clientY
      if(this.type === 'lwh') {
        this.width = this.windowWidth - moveEndX + this.moveStartX
      }else{
        this.width = this.windowWidth + moveEndX - this.moveStartX
      }

      this.height = this.windowHeight + moveEndY - this.moveStartY
      if(this.width<=460){
        this.width = 460
      }
      if(this.width>=(WindowOffsetWidth-77)){
        this.width = WindowOffsetWidth-77
      }
      this.window.style.width = this.width + 'px'
      if(this.height<=400){
        this.height = 400
      }
      if(this.height>=(WindowOffsetHeight-37)){
        this.height = WindowOffsetHeight-37
      }
      this.window.style.height = this.height + 'px'
    }
  }
  moveDivLeftWidth = (e) => {
    e.preventDefault()
    if(this.moving){
      const moveEndX = e.clientX
      this.width = this.windowWidth - moveEndX + this.moveStartX
      if(this.width<=460){
        this.width = 460
      }
      if(this.width>=(WindowOffsetWidth-77)){
        this.width = WindowOffsetWidth-77
      }
      this.window.style.width = this.width + 'px'

    }
  }
  moveDivRightWidth = (e) => {
    e.preventDefault()
    if(this.moving){
      const moveEndX = e.clientX
      this.width = this.windowWidth + moveEndX - this.moveStartX
      if(this.width<=460){
        this.width = 460
      }
      if(this.width>=(WindowOffsetWidth-77)){
        this.width = WindowOffsetWidth-77
      }
      this.window.style.width = this.width + 'px'
    }
  }
  moveDivBottomHeight = (e) => {
    e.preventDefault()
    if(this.moving){
      const moveEndY = e.clientY
      this.height = this.windowHeight + moveEndY - this.moveStartY
      if(this.height<=400){
        this.height = 400
      }
      if(this.height>=(WindowOffsetHeight-37)){
        this.height = WindowOffsetHeight-37
      }
      this.window.style.height = this.height + 'px'
    }
  }
  /*
   * 控制全屏
   */
  handleClickSetScreen = () => {
    const { isFullScreen } = this.state
    this.window.style.opacity = 0.1
    if(isFullScreen){
      this.setState({
        isFullScreen:false
      },()=>{
        this.width = lastWindowStyleState.width
        this.height = lastWindowStyleState.height
        this.winTop = lastWindowStyleState.top
        this.winLeft = lastWindowStyleState.left
        this.window.style.width = this.width + 'px'
        this.window.style.height = this.height + 'px'
        this.window.style.left = this.winLeft + 'px'
        this.window.style.top = this.winTop + 'px'
        this.window.style.opacity = 1
        lastWindowStyleState = {}
      })
    }else{
      lastWindowStyleState = {
        width: this.width,
        height: this.height,
        top: this.window.offsetTop,
        left: this.window.offsetLeft
      }
      this.setState({
        isFullScreen:true
      },()=>{
        this.width = WindowOffsetWidth
        this.height = WindowOffsetHeight-37
        this.winTop = 0
        this.winLeft = 0
        this.window.style.width = this.width + 'px'
        this.window.style.height = this.height + 'px'
        this.window.style.top = this.winTop + 'px'
        this.window.style.left = this.winLeft + 'px'
        this.window.style.zIndex = this.props.zIndex
        this.window.style.opacity = 1
      })
    }
  }
  mouseMovePosition = (e) => {
    e.preventDefault();
    const mouseEndX = e.clientX
    const mouseEndY = e.clientY
    this.windowLeftEnd = this.winLeft + mouseEndX - this.moveStartX
    this.windowTopEnd = this.winTop + mouseEndY - this.moveStartY
    if(this.windowTopEnd<-1){  //防止移动超过顶部
      this.windowTopEnd = -1
    }
    if(this.windowTopEnd>=(document.body.clientHeight - this.height)){
      this.windowTopEnd = document.body.clientHeight - this.height
    }
    if(this.windowLeftEnd<0){
      this.windowLeftEnd = 0
    }
    if(this.windowLeftEnd>=(document.body.clientWidth - this.width)){
      this.windowLeftEnd = document.body.clientWidth - this.width
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
      if(this.type === 'wh' || this.type === 'lwh'){ //右下宽高
        this.moveDivWidthHeight(e)
      }
      if(this.type === 'lw'){ //左边宽度
        this.moveDivLeftWidth(e)
      }
      if(this.type === 'rw'){ //右边宽度
        this.moveDivRightWidth(e)
      }
      if(this.type === 'bh'){ //底部高度
        this.moveDivBottomHeight(e)
      }
    }
  }
  mouseUp = () => {
    this.moving = false
    if(this.type === 'position'){
      if(this.windowLeftEnd){
        this.winLeft = this.windowLeftEnd
      }
      if(this.windowTopEnd) {
        this.winTop = this.windowTopEnd
      }
      this.windowCover.style.display = 'none'
    }
    if(this.type === 'wh' || this.type === 'lw' || this.type === 'rw' || this.type === 'bh' || this.type === 'lwh'){
      this.moveStartX = null
      this.moveStartY = null
      this.windowWidth = null
      this.windowHeight = null
      this.windowCover.style.display = 'none'
      if(this.type === 'lw' || this.type === 'lwh'){
        this.winLeft = WindowOffsetWidth - this.winRight - this.width
        this.window.style.left = this.winLeft + 'px'
        this.window.style.right = null
        this.winRight = null
      }
    }
    this.type = ''
    window.removeEventListener('mousemove',this.mouseMove)
  }
}


export default WindowsWindows