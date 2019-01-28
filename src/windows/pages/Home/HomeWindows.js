import React, {Component} from 'react'
import { View } from 'react-desktop'
import "../../../public/style/windows/index.scss"
import desktopImage from "../../../public/images/home/desktop-2.jpg"
import StartMenuWindows from "../../../components/menu/StartMenuWindows";

class HomeWindows extends Component {

  state = {}

  render() {
    return (
      <View
        width="100%"
        height="100%"
        layout="vertical"
        background={"url("+desktopImage+") no-repeat center center / cover"}
        style={{backgroundSize:'cover',overflow:'hidden'}}
      >
        <View
          width="100%"
          height="100%"
          layout="vertical"
        >

        </View>
        <StartMenuWindows/>
      </View>
    )
  }
}


export default HomeWindows