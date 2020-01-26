import React, { Component } from 'react'
import Draggable from 'react-draggable'

class TextBox extends Component {
  state = {
    activeDrags: 0,
    controlledPosition: {
      x: this.props.val.pos.x,
      y: this.props.val.pos.y
    },
    id: this.props.val.id,
    rew_data: this.props.val.data
  }

  constructor(props) {
    super(props)
    var cx = this.props.val.pos.x
    var cy = this.props.val.pos.y
  }

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags })
  }
  onStop = () => {
    console.log(this.state.conrolledPosition)
    this.setState({ activeDrags: ++this.state.activeDrags })
  }

  onControlledDrag = (e, position) => {
    const { x, y } = position
    this.setState({ controlledPosition: { x, y } })
  }

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop }
    const { controlledPosition } = this.state
    return (
      <Draggable axis="x" defaultPosition={{ x: controlledPosition.x, y: controlledPosition.y }} position={controlledPosition} onDrag={this.onControlledDrag} {...dragHandlers}>
        <div className="card">
          <h1>Hello World</h1>
        </div>
      </Draggable>
    )
  }
}

export default TextBox