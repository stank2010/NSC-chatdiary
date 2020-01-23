import React, { Component } from 'react'

class ShowText extends Component {
  state = {
    head: this.props.head,
    content: this.props.content
  }
  render() {
    return (
      <div className="card w-45">
        <h5 className="card-title">{this.state.head}</h5>
        <div className="card-body">
          <button className="btn btn-danger float-right">Delete</button>
          <p>{this.state.head }</p>
        </div>
      </div>
    )
  }
}

export default ShowText