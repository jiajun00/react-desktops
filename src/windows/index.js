import React, {Component} from 'react'
import store from './store/index'
import { Provider } from 'react-redux'
import {  Route, Switch } from 'react-router-dom'
import { closeContextMenu } from "./common/rightMenu"
import "../public/style/windows/index.scss"

import HomeWindows from "./pages/Home/HomeWindows"
import SystemControl from "./pages/SystemControl/index"
import File from "./pages/FileManage"
import Message from "./pages/Message"

class index extends Component {

  state = {}
  componentDidMount(){
    import("../public/style/themes/windows-themes-black.scss")
    document.oncontextmenu = () => {return false}
    document.onclick = closeContextMenu
  }
  render() {
    const { match } = this.props
    return (
      <Provider store={store}>
        <Switch>
          <Route path={`${match.path}`} exact component={HomeWindows}/>
          <Route path={`${match.path}/system`} component={SystemControl}/>
          <Route path={`${match.path}/file`} component={File}/>
          <Route path={`${match.path}/message`} component={Message}/>
        </Switch>
      </Provider>
    )
  }

}


export default index