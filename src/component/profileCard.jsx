import React, { Component } from 'react'
import ProfilePicture from '../image/Capture.png'

class Profile extends Component {
  state = {
    username: "Fuking Hero",
    email: "FK@gmail.com",
    status: "Single"
  }
  render() {
    return (
      <div className="card">
        <div className="card-body ">
          <div className="row">
            <div className="col-4">
              <img 
                className="float-right" 
                style={{ width: 100, height: 161 }/*Golden ratio*/} 
                src={ProfilePicture} alt="Hello" 
              />
            </div>
            <div className="col-8">
              <h3>{this.state.username}</h3>
              <p>{this.state.email}</p>
              <p>{"<" + this.state.status + ">"} </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile