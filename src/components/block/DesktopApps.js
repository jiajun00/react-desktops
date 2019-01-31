import React, {Component} from 'react'
import { View } from 'react-desktop'

import FileImg from '../../public/images/logo/file/file.ico'

class DesktopApps extends Component {

  state = {}

  render() {
    return (
      <View style={{padding:'10px 0 0 10px'}}>
        <View
          className="desktop_apps"
          layout="vertical"
        >
          <div className="desktop_app">
            <img src={FileImg} alt="file1"/>
            <h3>文件名1</h3>
          </div>
          <div className="desktop_app">
            <img src={FileImg} alt="file1"/>
            <h3>文件名2</h3>
          </div>
          <div className="desktop_app">
            <img src={FileImg} alt="file1"/>
            <h3>文件名3</h3>
          </div>
          <div className="desktop_app">
            <img src={FileImg} alt="file1"/>
            <h3>文件名4</h3>
          </div>
          <div className="desktop_app">
            <img src={FileImg} alt="file1"/>
            <h3>文件名5</h3>
          </div>
          <div className="desktop_app">
            <img src={FileImg} alt="file1"/>
            <h3>文件名6</h3>
          </div>
          <div className="desktop_app">
            <img src={FileImg} alt="file1"/>
            <h3>文件名7</h3>
          </div>
          <div className="desktop_app">
            <img src={FileImg} alt="file1"/>
            <h3>文件名8</h3>
          </div>
          <div className="desktop_app">
            <img src={FileImg} alt="file1"/>
            <h3>文件名9</h3>
          </div>
          <div className="desktop_app">
            <img src={FileImg} alt="file1"/>
            <h3>文件名10</h3>
          </div>
        </View>
      </View>
    )
  }
}


export default DesktopApps