import React, { Component } from 'react'
import Navbar from '../component/navbar'
import './Profile.css'

class Profile extends Component {
  state = {
    name: "Pichet",
    pass : "",
    showName: "That is name",
    email: "Fuck@gmail.component",
    status: []
  }
  render() {
    return (
      <div className="Profile">
        <Navbar />
        <div className="container text-center">
          <h1 className="text-primary">Profile</h1>
          <p>Image</p>
          <p className="display-4" style={{ fontSize: "2.5rem" }}>{this.state.showName}</p>
          <hr />

          <form style={{ width: "50%", margin: "auto" }}>
            <div className="form-group">
              <label className="label-name float-left" >Name    :</label>
              <input className="form-control" id="U_name" type="text" defaultValue={this.state.name} />
            </div>

            {
              (true)?<div className="form-group">
                <label className="label-status float-left" >Password  :</label>
                <input className="form-control" type="text" defaultValue={this.state.status} />
              </div>:<div></div>
            }
            <div className="form-group">
              <label className="label-email float-left">Email   :</label>
              <input className="form-control" id="U_email" type="text" defaultValue={this.state.email} />
            </div>
            <div className="form-group">
              <label className="label-status float-left" >Status  :</label>
              <input className="form-control" type="text" defaultValue={this.state.status} />
            </div>
          </form>

        </div>
      </div>
    )
  }
}

export default Profile