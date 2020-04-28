import React, {Component} from 'react'
import store from './store/index'
import { Provider } from 'react-redux'
import {  Route, Switch } from 'react-router-dom'

import "../public/style/tlp/index.scss"

import HomeTlp from "./pages/Home/HomeTlp"
import FinderTlp from "./pages/File/FinderTlp";

class index extends Component {


  render() {
    const { match } = this.props
    return (
      <Provider store={store}>
        <Switch>
          <Route path={`${match.path}`} exact component={HomeTlp}/>
          <Route path={`${match.path}/finder`}  component={FinderTlp}/>
        </Switch>
      </Provider>
      )
  }
}


export default index