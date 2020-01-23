import React, { Component } from 'react'
import { Link } from "react-router-dom";
import SplitData from '../component/function'
import ChatBox from '../component/ChatBox'

class EditDiary extends Component {
  state={
    obj:[]
  };

  showFile = () => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
         var file = document.querySelector('input[type=file]').files[0];
         var reader = new FileReader()

            reader.onload = (event)=> { 
              var obj = this.state.obj;
              obj.push({
                id:obj.length,
                type:"chat",
                pos:{
                  x:20,
                  y:20
                },
                data: SplitData(event.target.result+"\n")
              });
              
              this.setState({obj:obj});
              //console.log(obj);
            }
         reader.readAsText(file);
         //console.log(reader);
         //console.log(reader.result);
         console.log(this.state.obj);
   }else {
      alert("Your browser is too old to support HTML5 File API");
   }

  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <Link to="/mainPage">back</Link>
        </div>
        

        <div className="card-body" style={{"height":"100vh"}}> 
           {this.state.obj.map((item,i)=>{return <ChatBox val={item} />})}
        </div>

        <div className="card-footer fixed-bottom" >
          <div className="row">
            Name<br/>
          </div>
          <div className="row">
            <input type="text" className="form-control" style={{width:"50%"}}/>
            <button className="btn btn-primary" style={{width:"15%"}}>
              <span className="fas fa-font"/> 
            </button>
            <button className="btn btn-primary" style={{width:"15%"}} onClick={()=>document.getElementById("files").click()}>
              <span className="fas fa-comment"/> 
              <input id="files" type="file" onChange={this.showFile} style={{"display":"none"}} />
            </button>
          </div>

        </div>
      </div>
    )
  }
}

export default EditDiary