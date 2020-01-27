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
    raw_data: this.props.val.data
  };

  componentDidMount() {
    console.log(this.state);
  }

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  onControlledDrag = (e, position) => {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
    
    //console.log(this.props.valFromStore);
    //console.log(this.state);
    
    const Diary = this.props.valFromStore;
    const D_Before = Diary.D_object[this.state.id];
    D_Before.pos = {x,y};
    this.props.edite_state.bind(this,{Diary:D_Before});
  };
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { controlledPosition } = this.state;

    return (
      <Draggable bounds="parent" position={controlledPosition} onDrag={this.onControlledDrag} cancel="ul" {...dragHandlers}>
        <div className="card" style={{ "height": "200px", "width": "200px" }}>
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