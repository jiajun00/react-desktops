import React, {Component} from 'react'
import {calc_empty_list} from "../../public/utils/com";

import "../../public/style/components/file/file.scss"


class File extends Component {
  componentDidMount(){
    this.onWindowResize()
    window.addEventListener('resize', this.onWindowResize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize)
  }
  render() {
    const {
      fileLists,match,history
    } = this.props
    return (
      <div
        ref={(files_list)=>{this.files_list=files_list}}
        className="findder_files_list"
      >
        {fileLists.sort(this.compare('sort')).map((row)=>(
          <div
            key={row.name}
            className="finder_file"
          >
              <div
                onDoubleClick={()=>{history.push(match.path+'/'+row.id)}}
                className="file"
                onDragEnter={this.dragenter}
                onDragLeave={this.dragleave}
                onDragStart={(el)=>{this.domdrugstart( row.sort, row.name, row.imgUrl, el)}}
                onDrop={(el)=>{this.drop(row.sort, this.props.fileLists, 'sort', el)}}
                onDragOver={this.allowDrop}
              >
                <img src={row.logo} alt={row.name}/>
                <span>{row.name}</span>
              </div>
          </div>
        ))}
        {this.props.emptyLists}
      </div>
    )
  }
  //监听窗口大小
  onWindowResize = () => {
    const list = calc_empty_list(this.files_list.offsetWidth,90,this.props.fileLists.length,this.props.emptyLists.length)
    if(list){
      this.props.emptyList(list)
    }
  }
  // 拖动事件
  domdrugstart = (sort, name, imgUrl, ee) => {
    ee.dataTransfer.setData("name", name)
    ee.dataTransfer.setData("sort", sort)
  }
  // 拖动后鼠标进入另一个可接受区域
  dragenter = (ee) => {
    // ee.currentTarget.style.border = '2px dashed #008dff';
    // ee.currentTarget.style.boxShadow = '0 0 8px rgba(30, 144, 255, 0.8)';
  }
  // a拖到b，离开b的时候触发
  dragleave = (ee) => {
    // ee.currentTarget.style.border = ''
    // ee.currentTarget.style.boxShadow = ''
  }
  // 对象排序
  compare(key) {
    return (obj1, obj2) => {
      if (obj1[key] < obj2[key]) {
        return -1;
      } else if (obj1[key] > obj2[key]) {
        return 1;
      }
      return 0
    }
  }
  // 当一个元素或是选中的文字被拖拽释放到一个有效的释放目标位置时
  drop = (dropedSort, data, sortKey, ee) => {
    ee.preventDefault();
    const name = ee.dataTransfer.getData("name");
    const sort = ee.dataTransfer.getData("sort");
    // if (sort < dropedSort) {
      data.map(item => {
        if (item.name === name) {
          item[sortKey] = dropedSort;
        } else if (item[sortKey] > sort && item[sortKey] < dropedSort + 1) {
          item[sortKey]--;
        }
        return item;
      })
    // } else {
    //   data.map(item => {
    //     if (item.imgUrl === imgUrl) {
    //       item[sortKey] = dropedSort;
    //     } else if (item[sortKey] > dropedSort - 1 && item[sortKey] < sort) {
    //       item[sortKey]++;
    //     }
    //     return item;
    //   });
    // }
    this.props.setFileList(data)
  }
  allowDrop = (ee) => {
    ee.preventDefault();
  }
}


export default File