import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './routes/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={Home} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
