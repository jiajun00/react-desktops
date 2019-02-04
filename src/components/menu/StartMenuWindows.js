import React, {Component} from 'react'
import { View } from 'react-desktop'
import { Icon } from '@alifd/next'
import DateComponent from "../block/DateComponent";
class StartMenuWindows extends Component {

  state = {}

  render() {
    const {
      dataTime,isOpenMessageBox,isOpenStartBox,openWindowList,
      setDataTime,openMessageBox,closeMessageBox,openStartBox,closeStartBox,setWindowOpenList,closeWindow,hiddenWindow
    } = this.props

    return (
      <View
        width="100%"
        height="40"
        className="start_menus"
      >
        <View
          className="start_menus_logo"
          onClick={isOpenStartBox?closeStartBox:openStartBox}
        >
          <i className="iconfont">&#xe64b;</i>
        </View>
        <View
          width="calc(100% - 206px)"
        >
          {openWindowList.map((row)=>(
            <View
              key={row.type}
              className={row.isTop?"start_menus_win active":"start_menus_win"}
            >
              <View className="start_menus_win_box">
                <img src={row.logo} alt={row.type}/>
                <h3>{row.name}</h3>
                <Icon onClick={()=>{closeWindow(row.type,openWindowList)}} type="delete-filling" size="xs"/>
              </View>
              <div className="start_menus_win_cover" onClick={()=>{row.isTop?hiddenWindow(row,openWindowList):setWindowOpenList(row,openWindowList)}}/>
            </View>
          ))}

        </View>
        <View
          width={133}
          style={{position:'absolute',right:0}}
        >
          <DateComponent dataTime={dataTime} setDataTime={setDataTime} type="win"/>
          <View
            className="start_menus_message"
            onClick={isOpenMessageBox?closeMessageBox:openMessageBox}
          >
            <i className="iconfont">&#xe6f6;</i>
          </View>
        </View>
      </View>
    )
  }
}


export default StartMenuWindows