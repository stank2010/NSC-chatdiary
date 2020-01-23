import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Index extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">

          <h1>This is a index page</h1>
          <Link to="/mainPage">click</Link>
        </div>
      </div>
    )
  }
}

export default Index