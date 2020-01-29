import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import SplitData from '../component/function'
import ChatBox from '../component/ChatBox'
import TextBox from '../component/textForm'

class EditDiary extends Component {
  state = {
    obj1: [],
    checkClick: false,
    objId: 0
  };

  showFile = () => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      var file = document.querySelector('input[type=file]').files[0];
      var reader = new FileReader()
      reader.onload = (event) => {
        var obj1 = this.state.obj1;
        obj1.push({
          id: this.state.objId++,
          type: "chat",
          pos: {
            x: 20,
            y: 20
          },
          data: SplitData(event.target.result + "\n")
        });
        this.setState({ obj1: obj1 });
      }
      reader.readAsText(file);
      console.log(this.state.obj1);
    } else {
      alert("Your browser is too old to support HTML5 File API");
    }
  }

  handleMouseDown = (e) => {
    e.persist()
    const texts = this.state.obj1

    texts.push({
      id: this.state.objId++,
      type: "text",
      pos: {
        x: 20,
        y: 20
      }
    })
    this.setState({ obj1: texts, objId: this.state.objId++, checkClick: false })
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <Link to="/mainPage">back</Link>
        </div>
        <div className="card-body" style={{ "height": "100vh" }}>
          {this.state.obj1.map((item, i) => {
            switch (item.type) {
              case 'chat':
                return <ChatBox val={item} />
              case 'text':
                return <TextBox val={item} />
              default:
                return null
            }
          })}
        </div>

        <div className="card-footer fixed-bottom" >
          <div className="row">
            Name<br />
          </div>
          <div className="row">
            <input type="text" className="form-control" style={{ width: "50%" }} />
            <button className="btn btn-primary" style={{ width: "15%" }}
              onClick={this.handleMouseDown}
            >
              <span className="fas fa-font" />
            </button>
            <button className="btn btn-primary" style={{ width: "15%" }} onClick={() => document.getElementById("files").click()}>
              <span className="fas fa-comment" />
              <input id="files" type="file" onChange={this.showFile} style={{ "display": "none" }} />
            </button>
          </div>

        </div>
      </div>
    )
  }
}



EditDiary = connect()(EditDiary)

export default EditDiary