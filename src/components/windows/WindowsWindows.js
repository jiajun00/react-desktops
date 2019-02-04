import React, {Component, Fragment} from 'react'
import { Window,TitleBar,View } from 'react-desktop/windows'

const WindowOffsetWidth = window.innerWidth
const WindowOffsetHeight = window.innerHeight
let lastWindowStyleState = null //记录前一次设置的屏幕属性

class WindowsWindows extends Component {
  constructor(props){
    super(props)
    this.moving = false
    this.type=''
    this.width =  800
    this.height = WindowOffsetHeight-100
    this.windowTop = 26 + props.zIndex
    this.windowLeft= (WindowOffsetWidth - this.width)/2 + props.zIndex
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
      display:window.isShow ? "block" : "none",
      top:this.windowTop+"px",
      left:this.windowLeft+"px",
      width:this.width,
      height:this.height,
      zIndex:this.props.zIndex
    }
    const titleBarStyle={
      position:'relative',
      zIndex:this.props.zIndex + 1
    }
    const buttonStyle={
      width: '50px',
      height: '50px',
      position: 'absolute',
      bottom: '-15px',
      right: '-15px',
      cursor: 'se-resize',
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
    return (
      <Fragment>
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
              onMouseDown={e => {
                this.mouseMoveDown(e,'position')
                setWindowIndex(window,openWindowList)
              }}
              onMinimizeClick={()=>hiddenWindow(window,openWindowList)}
              onMaximizeClick={this.handleClickSetScreen}
              onCloseClick={() => {closeWindow(window.type,openWindowList)}}
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
              // this.props.setWindowIndex(this.props.window,this.props.openWindowList)
            }}
            style={buttonStyle}
          />
          }
        </span>
      </Fragment>
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
      window.addEventListener('mousemove', this.mouseMove)
      this.windowCover.style.display = 'block'
    }
  }
  moveDivWeightHeight = (e) => {
    e.preventDefault();
    if(this.moving){
      const moveEndX = e.clientX
      const moveEndY = e.clientY
      this.width = this.windowWidth + moveEndX - this.moveStartX
      this.height = this.windowHeight + moveEndY - this.moveStartY

      if(this.width>460 &&  this.width<(WindowOffsetWidth-77)){
        this.window.style.width = this.width + 'px'
      }
      if(this.height>400 && this.height<(WindowOffsetHeight-37)){
        this.window.style.height = this.height + 'px'
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
        this.window.style.height = WindowOffsetHeight-37 + 'px'
        this.window.style.top = '0px'
        this.window.style.left = '0px'
        this.window.style.zIndex = '10'
      })
    }
  }
  mouseMovePosition = (e) => {
    e.preventDefault();
    const mouseEndX = e.clientX
    const mouseEndY = e.clientY
    this.windowLeftEnd = this.windowLeft + mouseEndX - this.moveStartX;
    this.windowTopEnd = this.windowTop + mouseEndY - this.moveStartY;
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


export default WindowsWindows