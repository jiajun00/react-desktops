import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Portal from "./Portal"
import Mac from "./mac/indexLoadable"
import Windows from "./windows/indexLoadable"

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Portal}/>
            <Route path="/mac" component={Mac}/>
            <Route path="/win" component={Windows}/>
          </Switch>
        </BrowserRouter>
    )
  }
}

export default App
