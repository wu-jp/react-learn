import React, { Component } from "react"

export default class ErrorBound extends Component {
  static getDerivedStateFromError(err) {
    console.log("发生错误了")
    return {
      hasError: true,
    }
  }

  state = {
    hasError: false,
  }

  render() {
    if (this.state.hasError) {
      return <h2>这里发生错误了</h2>
    }
    return <div>{this.props.children}</div>
  }
}
