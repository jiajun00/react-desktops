import React, {Component} from 'react'
import { View } from 'react-desktop'
import DateComponent from "../block/DateComponent";
class StartMenuWindows extends Component {

  state = {}

  render() {
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
          width={150}
        >
          <DateComponent type="win"/>
        </View>
      </View>
    )
  }
}


export default StartMenuWindows