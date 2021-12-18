import React, { Component } from "react"

export default class Test extends Component {
  constructor(props) {
    super(props)

    this.testRef = null

    this.setTextInputRef = element => {
      this.testRef = element
    }

    // 访问refs
    this.handel = () => {
      this.testRef.focus()
    }
  }

  render() {
    return (
      <div>
        <input ref={this.setTextInputRef} type="text" />
        <button onClick={this.handel}>聚焦</button>
      </div>
    )
  }
}
