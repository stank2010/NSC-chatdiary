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

  componentDidMount() {
    this.input.focus()
  }

  onStart = () => {
    this.setState({ activeDrags: this.state.activeDrags })
  }
  onStop = () => {
    console.log(this.state.conrolledPosition)
    this.setState({ activeDrags: this.state.activeDrags })
  }

  onControlledDrag = (e, position) => {
    const { x, y } = position
    this.setState({ controlledPosition: { x, y } })
  }

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop }
    const { controlledPosition } = this.state
    return (
      <Draggable position={controlledPosition} onDrag={this.onControlledDrag} {...dragHandlers}>
        <div className="card" style={{ width: '50%' }}>
          <textarea ref={input => { this.input = input }} id="" cols="30" rows="10"></textarea>
        </div>
      </Draggable>
    )
  }
}

export default TextBox