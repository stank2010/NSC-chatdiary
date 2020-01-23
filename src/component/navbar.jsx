import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1"><Link to="/mainPage"><span className="fas fa-home"></span>Main</Link></span>
        <span className="nav-item justify-content-end"><Link to="/profile"><span className="fas fa-user"></span> Profile</Link></span>
      </nav>
    )
  }
}

export default Navbar