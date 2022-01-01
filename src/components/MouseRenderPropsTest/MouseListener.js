import React, { PureComponent } from "react"
import "./index.css"

export default class MouseListener extends PureComponent {
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
        {this.props.render(this.state)}
      </div>
    )
  }
}
