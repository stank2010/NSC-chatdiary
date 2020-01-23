import React, { Component } from 'react'
import Draggable from 'react-draggable'

class ChatBox extends Component{
    state = {
      activeDrags: 0,
      controlledPosition: {
        x: this.props.val.pos.x, 
        y: this.props.val.pos.y
      },
      id : this.props.val.id,
      raw_data : this.props.val.data
    };
  
    onStart = () => {
      this.setState({activeDrags: ++this.state.activeDrags});
    };
  
    onStop = () => {
      this.setState({activeDrags: --this.state.activeDrags});
    };
  
    onControlledDrag = (e, position) => {
      const {x, y} = position;
      this.setState({controlledPosition: {x, y}});
    };
  
    render(){
      const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
      const {controlledPosition} = this.state;
  
      return(
        <Draggable bounds="parent" position={controlledPosition}  onDrag={this.onControlledDrag} cancel="ul" {...dragHandlers}>
            <div className="card" style={{"height":"200px","width":"200px"}}>
                <div className="card-header bg-primary text-white" style={{"width":"200px"}}>
                    {this.state.raw_data.Name}
                </div>
                
                <ul className="card-body overflow-auto">
                      {this.state.raw_data.data.map((chat,i)=>{
                      return (
                        <div className={ (this.state.raw_data.Name==chat.person)?"float-left":"float-right" }  
                          style={{"font-size":"10px",  paddingTop: "5px",border: "1px solid #313BB6",width:"100px",borderRadius:"3px"}}> 
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

export default ChatBox;