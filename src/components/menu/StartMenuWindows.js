import React, {Component} from 'react'
import { View } from 'react-desktop'
import DateComponent from "../block/DateComponent";
class StartMenuWindows extends Component {

  state = {}

  render() {
    const {
      dataTime,isOpenMessageBox,
      setDataTime,openMessageBox,closeMessageBox
    } = this.props

    return (
      <View
        width="100%"
        height="40"
        className="start_menus"
      >
        <View
          className="start_menus_logo"
        >
          <i className="iconfont">&#xe64b;</i>
        </View>
        <View
          width={300}
        >

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