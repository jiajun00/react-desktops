import React, {Component, Fragment} from 'react'
import { Button,Upload } from '@alifd/next'

const imageList = [
  {src:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/home/desktop-1.jpg',sort:0},
  {src:'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/home/desktop-2.jpg',sort:1}
]

class ImageSet extends Component {

  state = {}

  render() {
    const {
      background_image,
      delete_img,preview_set
    } = this.props
    return (
      <Fragment>
        <h2>选择图片</h2>
        <ul className="desktop_set_image_ul">
          {imageList.map((row,i)=>(
            <li key={i}>
            <div className="desktop_set_image">
              <img src={row.src} alt={row.src}/>
              {background_image === row.src && <div className="desktop_set_image_action"/>}
              <div className="desktop_set_image_cover">
                <Button ghost="dark" onClick={()=>{preview_set(row.src)}}>预览</Button>
                {background_image !== row.src && <Button ghost="dark" onClick={()=>{delete_img()}}>删除</Button>}
              </div>
            </div>
            </li>
          ))}
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