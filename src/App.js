import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Give from './routes/Give'
import Help from './routes/Help'
import Manage from './routes/Manage'
import Register from './routes/Register'
import Home from './routes/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/give" component={Give} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/manage" component={Manage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
