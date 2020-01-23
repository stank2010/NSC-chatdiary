import React, { Component } from 'react'
import Navbar from '../component/navbar'
import './Profile.css'

class Profile extends Component {
  state = {
    name: "Pichet",
    showName: "Hello World",
    email: "Fuck@gmail.component",
    status: []
  }
  render() {
    return (
      <div className="Profile">
        <Navbar />
        <div className="container text-center">
          <h1>is a Profile</h1>
          <p>Image</p>
          <p className="display-4" style={{ fontSize: "2.5rem" }}>{this.state.showName}</p>
          <hr />
          <div style={{ width: "50%", margin: "auto" }}>
            <div>
              <label className="label-name" >Name</label>
              <input type="text" defaultValue={this.state.name} />
            </div>
            <div>
              <label className="label-email">Email</label>
              <input type="text" defaultValue={this.state.email} />
            </div>
            <div>
              <label className="label-status" >Status</label>
              <input type="" defaultValue={this.state.status} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile