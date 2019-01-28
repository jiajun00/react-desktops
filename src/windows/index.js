import React, {Component} from 'react'
import store from './store/index'
import { Provider } from 'react-redux'
import {  Route, Switch } from 'react-router-dom'
import HomeWindows from "./pages/Home/HomeWindows";

class index extends Component {

  state = {}

  render() {
    const { match } = this.props
    return (
      <Provider store={store}>
        <Switch>
          <Route path={`${match.path}`} exact component={HomeWindows}/>
        </Switch>
      </Provider>
    )
  }
}


export default index