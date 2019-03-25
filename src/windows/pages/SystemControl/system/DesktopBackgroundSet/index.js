import React, {Component} from 'react'
import { Button,Dialog,ConfigProvider,Select } from '@alifd/next'
import {actionCreators as actionCreatorsHome} from "../../../Home/store"
import {connect} from "react-redux"
import { sendParentMessage } from "../../../../../public/utils/com"
import '../../../../../public/style/windows/system_control/desktop_set.scss'
import ContentRight from "../../../../../components/content/ContentRight"
import ImageSet from "./DesktopSetType/ImageSet"
import ColorSet from "./DesktopSetType/ColorSet"


const Option = Select.Option

const breadcrumbRoute = {
  title:'首页',
  url:"/win/system",
  list:[
    {name:"桌面设置",url:'/desk_manage'}
  ]
}

class Index extends Component {

  state = {
    type:'image',
    preview_background:this.props.background.value,
    visible: false
  }
  componentDidMount(){
    this.preview_init()
    window.addEventListener('resize', this.preview_init)
  }
  componentWillUnmount() {
    if(this.props.background.value !== this.state.preview_background){
      const save = window.confirm('是否保存预览的图片作为系统桌面？')
      if(save === true){
        this.props.set_background(this.state.type,this.state.preview_background)
        this.sendMessage()
      }
    }
    window.removeEventListener('resize', this.preview_init)
  }
  render() {
    const { match,background,set_background } = this.props
    const { type,preview_background } = this.state
    const previewImgStyle = {
      width:'100%',
      background: type ==='image'?'url('+preview_background+') no-repeat center center / cover' : preview_background
    }
    return (
      <ConfigProvider locale={{ Dialog: { ok: '确认', cancel: '取消' } }}>
        <ContentRight
          className="desktop_set"
          breadcrumbRoute = {breadcrumbRoute}
        >
          <Button
            onClick={
              ()=>{
                set_background(type,preview_background)
                this.sendMessage()
              }}
            disabled={background.value === preview_background}
            className="desktop_set_save"
            size="large"
            type="primary"
          >保存</Button>
          <h1>桌面设置</h1>
          <div className="desktop_set_preview">
            <h2>预览</h2>
            <div className='desktop_set_preview_background' ref={(e)=>this.preview=e} style={previewImgStyle}>
              <div className="desktop_set_preview_start"/>
              <div className={type==='image'?"desktop_set_preview_start_box desktop_set_preview_start_box_image":"desktop_set_preview_start_box desktop_set_preview_start_box_color"}/>
            </div>
          </div>
          <div className="desktop_set_main">
            <h2>背景</h2>
            <Select id="select-type" defaultValue={match.params.type?match.params.type:'image'} onChange={this.handleChangeType}>
              <Option value="image">图片背景</Option>
              <Option value="color">纯色背景</Option>
            </Select>

            {this.render_type(match.params.type)}

          </div>
        </ContentRight>
      </ConfigProvider>
    )
  }
  //预览图片样式初始化
  preview_init = () => {
    const width = this.preview.offsetWidth
    const height = width / 16 * 9
    this.preview.style.height = height + 'px'
  }
  //预览图片设置
  preview_set = (url,type='image') => {
    this.setState({
      type,
      preview_background:url
    })
  }
  delete_img = () => {
    Dialog.confirm({
      title: '警告',
      content: '是否确认删除图片？删除后将不能恢复！',
      onOk: () => console.log('ok'),
      onCancel: () => console.log('cancel')
    })
  }
  render_type = (type) => {
    const { preview_background } = this.state
    const background_image = this.props.background.value
    switch (type){
      case "image":
        return <ImageSet delete_img={this.delete_img} background_image={background_image}  preview_set={this.preview_set}/>
      case "color":
        return <ColorSet preview_set={this.preview_set} preview_background={preview_background}/>
      default:
        return <ImageSet delete_img={this.delete_img} background_image={background_image} preview_set={this.preview_set}/>
    }
  }
  handleChangeType = (value) => {
    const url = "/win/system/desk_manage/" + value
    this.props.history.push(url)
  }
  sendMessage = () => {
    if(window.top !== window.self){
      const { preview_background,type } = this.state
      const background = {
        type,
        value:preview_background
      }
      sendParentMessage(background,"background_set")
    }
  }
}

const initMapStateToProps = (state) => ({
  background:state.getIn(['homeWindows','background']).toJS()
})
const initMapDispatchToProps = (dispatch) => ({
  /*
   * 设置窗口背景
   */
  set_background(type,value){
    dispatch(actionCreatorsHome.set_background(type,value))
  }
})

export default connect(initMapStateToProps,initMapDispatchToProps)(Index)