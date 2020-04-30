import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Portal from "./Portal"
import Mac from "./mac/indexLoadable"
import Tlp from "./tlp/indexLoadable"
import Windows from "./windows/indexLoadable"

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Tlp}/>
            <Route path="/portal" component={Portal}/>
            <Route path="/mac" component={Mac}/>
            <Route path="/win" component={Windows}/>
            <Route path="/tlp" component={Tlp}/>
          </Switch>
        </BrowserRouter>
    )
  }
}

export default App
