import React, { Component } from 'react'
import Navbar from '../component/navbar'
import './Profile.css'
import {connect} from 'react-redux'

class Profile extends Component {
  state = {
    U_name: this.props.valFromStore.U_name,
    U_pass : "",
    email: "Fuck@gmail.component",
    temp_name : ""
  }

   textboxHandleChange(e){
      this.setState({temp_name:e.target.value});
    }

  render() {
    const Editer = this.props.editeUser;

    return (
      <div className="Profile">
        <Navbar />
        <div className="container text-center">
          <h1 className="text-primary">Profile</h1>
          <h3> Welcome {this.state.U_name} </h3>
          <p className="display-4" style={{ fontSize: "2.5rem" }}>{this.props.valFromStore.U_name}</p>
          <hr />

          <form style={{ width: "50%", margin: "auto" }}>
            <div className="form-group">
              <label className="label-name float-left" >Name    :</label>
              <input className="form-control" id="U_name" type="text"  onChange={this.textboxHandleChange.bind(this)} />
            </div>

            {
              (this.props.valFromStore.U_name)?<div className="form-group">
                <label className="label-status float-left" >Password  :</label>
                <input className="form-control" type="text" defaultValue={this.state.U_pass} />
              </div>:<div></div>
            }

            <div className="form-group">
              <label className="label-email float-left">Email   :</label>
              <input className="form-control" id="U_email" type="text" defaultValue={this.state.U_email} />
            </div>
          </form>
          {
            (this.props.valFromStore.U_name)?
              <button onClick={Editer.bind(this,this.state.temp_name)}>  Register </button>
            :
              <button onClick={Editer.bind(this,this.state.temp_name)}>  Change</button>
          }
        </div>
      </div>
    )
  }

}


const mapStateToProps = state =>{
  return{
    valFromStore : state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editeUser:(val)=>{
      return dispatch({type:'update_state',payload:{ user:{U_name:val} }});
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);