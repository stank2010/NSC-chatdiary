import React, { Component } from 'react'
import { Link } from "react-router-dom";
import SplitData from '../component/function'
import ChatBox from '../component/ChatBox'
import {connect} from 'react-redux'

class EditDiary extends Component {
  state={
    D_id : this.props.location.Diary.D_id,
    D_auther :  this.props.location.Diary.D_auther,
    D_name :this.props.location.Diary.D_name ,
    D_object : this.props.location.Diary.D_object
  };

  showFile = () => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
         var file = document.querySelector('input[type=file]').files[0];
         var reader = new FileReader();

             reader.onload = (event)=> { 
              var obj = this.state.D_object;
              obj.push({
                obj_id:obj.length,
                type:"chat",
                pos:{
                  x:10,
                  y:10
                },
                data: SplitData(event.target.result+"\n")
              });
              
              this.setState({D_object:obj});
            };
         reader.readAsText(file);
         
   }else {
      alert("Your browser is too old to support HTML5 File API");
   }

  }
  componentWillUpdate(){
    const Diary_redux = this.props.valFromStore;
    Diary_redux.D_object = this.state.D_object;

    this.props.edite_state.bind(this, Diary_redux);
    console.log("edite_state",this.state);
    console.log("edite_Redux",this.props.valFromStore);
  }

  saveDiary(){ //axios
    //this.props.edite_state.bind(this,{Diary:this.state});
  }



  render() {
    const   add_textbox=()=>{
              var obj = this.state.D_object;
              obj.push({
                obj_id:obj.length,
                type:"text",
                pos:{
                  x:10,
                  y:10
                },
                data:{Name:"",data:""}
              });
              this.setState({D_object:obj});    
    }

    return (
      <div className="card">
        <div className="card-header">
          <Link to="/mainPage">back</Link>
          <button className="btn btn-danger float-right" onClick={this.saveDiary} > Save </button>
        </div>
        

        <div className="card-body" style={{"height":"100vh"}}> 
           {this.state.D_object.map((item,i)=>{return <ChatBox val={item} key={i} />})}
        </div>

        <div className="card-footer fixed-bottom" >
          <div className="row">
            Name<br/>
          </div>
          <div className="row">
            <input type="text" className="form-control" style={{width:"50%"}} defaultValue={this.state.D_name}/>
            <button className="btn btn-primary" style={{width:"15%"}} onClick={add_textbox}>
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

const mapStateToProps = state =>{
  return{
    valFromStore : state.Diary
  }
}

const mapDispatchToProps = dispatch => {
  return {
    edite_state:(val)=>{
      return dispatch({type:'update_state',payload:{Diary:val}});
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditDiary);