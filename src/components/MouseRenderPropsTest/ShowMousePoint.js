import React, { Component } from "react"
import "./index.css"

export default class ShowMousePoint extends Component {
  divRef = React.createRef()
  state = {
    x: 0,
    y: 0,
  }

  handelMouseMove = e => {
    const { left, top } = this.divRef.current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top

    this.setState({
      x,
      y,
    })
  }

  render() {
    return (
      <div className="container" ref={this.divRef} onMouseMove={this.handelMouseMove}>
        当前坐标点x:{this.state.x} y:{this.state.y}
      </div>
    )
  }
}
