import React, {Component} from 'react'
import store from './store/index'
import { Provider } from 'react-redux'
import {  Route, Switch } from 'react-router-dom'

import HomeWindows from "./pages/Home/HomeWindows"
import SystemControl from "./pages/SystemControl/SystemControl"
import File from "./pages/FileManage"

class index extends Component {

  state = {}
  componentDidMount(){
    import("../public/style/themes/windows-themes-black.scss")
  }
  render() {
    const { match } = this.props
    return (
      <Provider store={store}>
        <Switch>
          <Route path={`${match.path}`} exact component={HomeWindows}/>
          <Route path={`${match.path}/system`} component={SystemControl}/>
          <Route path={`${match.path}/file`} component={File}/>
        </Switch>
      </Provider>
    )
  }
}


export default index