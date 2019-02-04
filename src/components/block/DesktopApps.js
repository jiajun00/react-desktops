import React, {Component} from 'react'
import { View } from 'react-desktop'


class DesktopApps extends Component {

  state = {}

  render() {
    const {
      desktopApps,openWindowList,
      setWindowOpenList
    } = this.props
    return (
      <View style={{padding:'10px 0 0 10px'}}>
        <View
          className="desktop_apps"
          layout="vertical"
        >
          {desktopApps.map((row)=>(
            <div
              key={row.type}
              className="desktop_app"
              onDoubleClick={()=>{setWindowOpenList(row,openWindowList)}}
            >
              <img src={row.logo} alt="file1"/>
              <h3>{row.name}</h3>
            </div>
          ))}
        </View>
      </View>
    )
  }
}


export default DesktopApps