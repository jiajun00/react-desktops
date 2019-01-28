import React, {Component} from 'react'

class FileList extends Component {

  componentDidMount(){
    this.file_list()
    window.addEventListener('resize',this.file_list)
  }
  componentWillUnmount(){
    window.removeEventListener('resize',this.file_list)
  }
  render() {
    return (
      <div className={'finder_fileList'}>
        <dl className={'finder_fileList_list'}>
          <dt>
            <div
              className={'finder_fileList_list_header_name'}
            >
              名称
            </div>
            <div
              className={'finder_fileList_list_header_class'}
            >
              种类
            </div>
            <div
              className={'finder_fileList_list_header_size'}
            >
              大小
            </div>
            <div
              className={'finder_fileList_list_header_date'}
            >
              修改日期
            </div>
          </dt>
          <dd>
            <ul ref={e=>this.files=e}>
              <li>
                <div
                  className={'finder_fileList_list_body_name'}
                >
                  文件名1
                </div>
                <div
                  className={'finder_fileList_list_body_class'}
                >
                  种类
                </div>
                <div
                  className={'finder_fileList_list_body_size'}
                >
                  123,133Mb
                </div>
                <div
                  className={'finder_fileList_list_body_date'}
                >
                  1992-04-12 12:32
                </div>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    )
  }
  file_list = () => {
    this.files.style.height = (window.document.body.offsetHeight - 23) + 'px'
  }
}


export default FileList