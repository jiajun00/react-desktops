import React, {Component} from 'react'
import { View } from 'react-desktop'
import { str_cut } from 'ljtools'


class DesktopApps extends Component {

  state = {}

  render() {
    const {
      desktopApps,desktopAppsShowControl,openWindowList,
      setWindowOpenList
    } = this.props
    return (
      <View width="100%" style={{padding:'10px 0 0 10px'}}>
        {desktopAppsShowControl.isShow &&
          <View
            className="desktop_apps"
            layout="vertical"
          >
            {desktopApps.map((row)=>(
              <div
                key={row.type}
                className={"desktop_app "+desktopAppsShowControl.size}
                onDoubleClick={()=>{row.isBlank?window.open(row.url):setWindowOpenList(row,openWindowList)}}
              >
                <img src={row.logo} alt="file1"/>
                <h3>{str_cut(row.name,7)}</h3>
              </div>
            ))}
          </View>
        }
      </View>
    )
  }
}


export default DesktopApps