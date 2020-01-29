import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Index extends Component {
  state = {
    A:10
  };
/*
  async Stank(){
    const obj={a:10,b:25}; 
    const res= await axios.post('http://localhost:8000/Stank',obj);
    return res;
  }
*/
  render() {
    let A=10;
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