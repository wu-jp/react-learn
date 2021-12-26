import React, { Component } from "react"
import PropTypes from "prop-types"

// 提取通用类型约束
const types = {
  a: PropTypes.number,
  b: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

function ChildA(props, context) {
  return (
    <div>
      这里是ChildA组件：a: {context.a} b: {context.b}
      <ChildB></ChildB>
    </div>
  )
}
ChildA.contextTypes = types

class ChildB extends Component {
  static contextTypes = types

  render() {
    return (
      <>
        <p>
          这里是ChildB组件 a: {this.context.a} b: {this.context.b}{" "}
        </p>
        <button
          onClick={() => {
            this.context.b === "wuyioo" ? this.context.onChange("wuyipp") : this.context.onChange("wuyioo")
          }}
        >
          改变b
        </button>
      </>
    )
  }
}

export default class OldContext extends Component {
  static childContextTypes = types

  state = {
    a: 0,
    b: "wuyioo",
  }

  getChildContext() {
    return {
      a: this.state.a,
      b: this.state.b,
      onChange: val => {
        this.setState({
          b: val,
        })
      },
    }
  }
  render() {
    return (
      <div>
        hello world
        <h2>这里是OldContext组件</h2>
        <button
          onClick={() => {
            this.setState({
              a: this.state.a + 1,
            })
          }}
        >
          a+1
        </button>
        <ChildA></ChildA>
      </div>
    )
  }
}
