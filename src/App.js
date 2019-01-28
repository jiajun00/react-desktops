import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Mac from "./mac"
import Windows from "./windows"

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Mac}/>
            <Route path="/mac" component={Mac}/>
            <Route path="/win" component={Windows}/>
          </Switch>
        </BrowserRouter>
    )
  }
}

export default App
