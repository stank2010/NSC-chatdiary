import React, { Component } from 'react'
import Navbar from '../component/navbar'
import './Profile.css'
import {connect} from 'react-redux'

class Profile extends Component {
  state = {
    U_name: this.props.valFromStore.U_name,
    U_pass : this.props.valFromStore.U_pass,
    email: this.props.valFromStore.U_email,
    temp_name : "",
    temp_pass : "",
    temp_email: ""
  }

  U_name_Change(e){
      this.setState({temp_name:e.target.value});
  }

  U_pass_Change(e){
    this.setState({temp_pass:e.target.value});   
  }

  U_email_Change(e){
    this.setState({temp_email:e.target.value});   
  }

  render() {
    const Editer = this.props.editeUser;

    return (
      <div className="Profile">
        <Navbar />
        <div className="container text-center">
          <h1 className="text-primary">Profile</h1>
          <h4> Welcome {this.state.U_name} </h4>
          <p className="display-4" style={{ fontSize: "2.5rem" }}>{this.props.valFromStore.U_name}</p>
          <hr />

          <form style={{ width: "50%", margin: "auto" }}>
            <div className="form-group">
              <label className="label-name float-left" >Name    :</label>
              <input className="form-control" id="U_name" type="text"  onChange={this.U_name_Change.bind(this)} />
            </div>

            {
              (this.props.valFromStore.U_name==""||true)?<div className="form-group">
                <label className="label-status float-left" >Password  :</label>
                <input className="form-control" type="text" defaultValue={this.state.U_pass} onChange={this.U_pass_Change.bind(this)} />
              </div>:<div></div>
            }

            <div className="form-group">
              <label className="label-email float-left">Email   :</label>
              <input className="form-control" id="U_email" type="text" defaultValue={this.state.U_email} onChange={this.U_email_Change.bind(this)}/>
            </div>
          </form>

          {
            (this.props.valFromStore.U_name=="")?
              <button 
                className="btn btn-primary" 
                onClick={Editer.bind(this,{
                  U_name : this.state.temp_name,
                  U_pass : this.state.temp_pass,
                  U_email: this.state.temp_email
                })}
              >  
                Register 
              </button>
            :
              <button 
                className="btn btn-primary"  
                onClick={Editer.bind(this,{
                  U_name : this.state.temp_name,
                  U_pass : this.state.temp_pass,
                  U_email: this.state.temp_email
                })}
              >  
                Change
              </button>
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
      return dispatch({type:'update_state',payload:{ user:val }});
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);