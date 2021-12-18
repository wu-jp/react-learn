import React, { Component } from "react"

export default class Test extends Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
    // 修改handel的this绑定
    this.handel = this.handel.bind(this)
  }

  handel() {
    // 访问refs
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" />
        <button onClick={this.handel}>调用子组件的方法</button>
      </div>
    )
  }
}
