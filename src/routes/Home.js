import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div id="help"><Link to="/help">I need help</Link></div>
        <div id="give"><Link to="/give">I can give</Link></div>
        <div id="register"><Link to="/register">Register a new shelter</Link></div>
        <div id="manage"><Link to="/manage">Manage a shelter</Link></div>
      </div>
    )
  }
}

export default Home
