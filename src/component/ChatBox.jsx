import React, { Component } from 'react'
import Draggable from 'react-draggable'
import {connect} from 'react-redux'

class ChatBox extends Component {
  state = {
    activeDrags: 0,
    controlledPosition: {
      x: this.props.val.pos.x,
      y: this.props.val.pos.y
    },
    id: this.props.val.obj_id,
    raw_data: this.props.val.data,
    Di : this.props.valFromStore
  };

  componentDidMount() {
    console.log(this.state);
    console.log("ChatBox-Redux-Update",this.state.Di);
  }

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  onControlledDrag = (e, position) => {
    const { x, y } = position;

    
    //console.log(this.props.valFromStore);
    //console.log(this.state);
    
    const Diary = this.state.Di;
    let D_Before = Diary.D_object[this.state.id];
    
    console.log("ChatBox_Redux",Diary);
    //console.log("Diary Before",D_Before,this.state.id);
    
    D_Before.pos = {x:x,y:y};
    Diary.D_object[this.state.id] = D_Before;

    this.props.edite_state.bind(this,{Diary: Diary });

    this.setState({ controlledPosition: { x, y } });

    //Diary = this.props.valFromStore;
    //console.log("Redux-Update",Diary);
    //D_Before = Diary.D_object[this.state.id];
    //console.log("Diary Before2",D_Before,this.state.id);   

  }



  render() {
    const onChangeTextBox= (e)=>{
    
      const Diary = this.state.Di;
  
      let D_Before = Diary.D_object[this.state.id];
      D_Before.data = {Name:"",data:e.target.value};
      Diary.D_object[this.state.id] = D_Before;
  
      this.props.edite_state.bind(this,{Diary: Diary });
      this.setState({raw_data:D_Before});
      console.log(this.props.valFromStore);
    }

    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { controlledPosition } = this.state;

    return (
      <Draggable bounds="parent" position={controlledPosition} onDrag={this.onControlledDrag} cancel="ul" {...dragHandlers}>
        <div className="card" style={ (this.props.val.type=='chat')?{ "height": "200px", "width": "200px" }:{width:"230px"} }>
          {
            (this.props.val.type=='chat')?
              <>
              <div className="card-header bg-primary text-white" style={{ "width": "200px" }}>
                {this.state.raw_data.Name}
              </div>
            
              <ul className="card-body overflow-auto">
                {this.state.raw_data.data.map((chat, i) => {
                  return (
                    <div className={(this.state.raw_data.Name === chat.person) ? "float-left" : "float-right"}
                      style={{ "font-size": "10px", paddingTop: "5px", border: "1px solid #313BB6", width: "100px", borderRadius: "3px" }}>
                      {chat.context}
                    </div>
                  );
                })}
              </ul>
              </>
              :
              <ul className="card-body">
                <textarea className="form-control" rows = "5" cols = "35" onChange={onChangeTextBox}>
                  {this.state.raw_data.data}
                </textarea>
              </ul>
          }
        </div>
      </Draggable>
    );
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
      return dispatch({type:'update_state',payload:val});
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatBox);