import React, {Component, Fragment} from 'react'
import { Button,Upload } from '@alifd/next'

class ImageSet extends Component {

  state = {}

  render() {
    const {
      delete_img,preview_set
    } = this.props
    return (
      <Fragment>
        <h2>选择图片</h2>
        <ul className="desktop_set_image_ul">
          <li>
            <div className="desktop_set_image">
              <img src="https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/home/desktop-1.jpg" alt=""/>
              <div className="desktop_set_image_cover">
                <Button ghost="dark" onClick={()=>{preview_set('https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/home/desktop-1.jpg')}}>预览</Button>
                <Button ghost="dark" onClick={()=>{delete_img()}}>删除</Button>
              </div>
            </div>
          </li>
          <li>
            <div className="desktop_set_image">
              <img src="https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/home/desktop-2.jpg" alt=""/>
              <div className="desktop_set_image_action"/>
              <div className="desktop_set_image_cover">
                <Button ghost="dark" onClick={()=>{preview_set('https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/home/desktop-2.jpg')}}>预览</Button>
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
      </Fragment>
    )
  }
}


export default ImageSet