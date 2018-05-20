import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
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
            <Route path="/help" component={Help} />
            <Route path="/give" component={Give} />
            <Route path="/register" component={Register} />
            <Route path="/manage" component={Manage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
