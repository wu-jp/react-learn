import React from "react"

export class A extends React.Component {
  // 不再关注跟该组件不相关的事情
  render() {
    return <h1>这是A: {this.props.a}</h1>
  }
}

export class B extends React.Component {
  // 不再关注跟该组件不相关的事情
  render() {
    return <h1>这是B: {this.props.b}</h1>
  }
}
