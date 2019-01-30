import React, {Component} from 'react'
import store from './store/index'
import { Provider } from 'react-redux'
import {  Route, Switch } from 'react-router-dom'

import "../public/style/mac/index.scss"

import HomeMac from "./pages/Home/HomeMac"
import FinderMac from "./pages/File/FinderMac";

class index extends Component {


  render() {
    const { match } = this.props
    return (
      <Provider store={store}>
        <Switch>
          <Route path={`${match.path}`} exact component={HomeMac}/>
          <Route path={`${match.path}/finder`}  component={FinderMac}/>
        </Switch>
      </Provider>
      )
  }
}


export default index