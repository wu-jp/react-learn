import React, { Component } from "react"

class TestH1 extends Component {
  log() {
    console.log("这里是TestH1组件")
  }
  render() {
    return <h1>这里是TestH1组件</h1>
  }
}

export default class Test extends Component {
  constructor(props) {
    super(props)

    this.testRef = React.createRef()
    this.handel = this.handel.bind(this)
  }

  handel() {
    // 访问refs
    this.testRef.current.log()
  }

  render() {
    return (
      <div>
        <button onClick={this.handel}>聚焦</button>
        <TestH1 ref={this.testRef}></TestH1>
      </div>
    )
  }
}
