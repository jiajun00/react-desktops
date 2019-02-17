import React, {Component} from 'react'
import { Button,Dialog,ConfigProvider,Upload } from '@alifd/next'

import '../../public/style/components/desktop/desktop_set.scss'
import ContentRight from "../content/ContentRight";

class DesktopSet extends Component {

  state = {
    preview_background_url:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/home/desktop-2.jpg',
    visible: false
  }
  componentDidMount(){

    this.preview_init()
    window.addEventListener('resize', this.preview_init)
  }
  componentWillUnmount() {
    const save = window.confirm('是否保存预览的图片作为系统桌面？')
    if(save === true){

    }
    window.removeEventListener('resize', this.preview_init)
  }
  render() {
    const { preview_background_url } = this.state
    const previewImgStyle = {
      width:'100%',
      background:'url('+preview_background_url+') no-repeat center center / cover'
    }

    return (
      <ConfigProvider locale={{ Dialog: { ok: '确认', cancel: '取消' } }}>
        <ContentRight
          className="desktop_set"
          title="桌面设置"
          merge_url="/win/system"
          route_url="/desk_manage"
        >
          <Button className="desktop_set_save" size="large" type="primary">保存</Button>
          <h1>桌面设置</h1>
          <div className="desktop_set_preview">
            <h2>预览</h2>
            <div className='desktop_set_preview_background' ref={(e)=>this.preview=e} style={previewImgStyle}>
              <div className="desktop_set_preview_start"/>
              <div className="desktop_set_preview_start_box"/>
            </div>
          </div>
          <div className="desktop_set_images">
            <h2>背景图片</h2>
            <ul>
              <li>
                <div className="desktop_set_image">
                  <img src="https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/home/desktop-1.jpg" alt=""/>
                  <div className="desktop_set_image_cover">
                    <Button ghost="dark" onClick={()=>{this.preview_set('https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/home/desktop-1.jpg')}}>预览</Button>
                    <Button ghost="dark" onClick={()=>{this.delete_img()}}>删除</Button>
                  </div>
                </div>
              </li>
              <li>
                <div className="desktop_set_image">
                  <img src="https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/home/desktop-2.jpg" alt=""/>
                  <div className="desktop_set_image_action"/>
                  <div className="desktop_set_image_cover">
                    <Button ghost="dark" onClick={()=>{this.preview_set('https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/home/desktop-2.jpg')}}>预览</Button>
                  </div>
                </div>
              </li>
              <li>
                <div className="desktop_set_image">
                  <Upload
                    shape="card"
                  >
                    上传图片（16:9）
                  </Upload>
                </div>
              </li>
            </ul>
          </div>
        </ContentRight>
      </ConfigProvider>
    )
  }
  preview_init = () => {
    const width = this.preview.offsetWidth
    const height = width / 16 * 9
    this.preview.style.height = height + 'px'
  }
  preview_set = (url) => {
    this.setState({
      preview_background_url:url
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
}


export default DesktopSet