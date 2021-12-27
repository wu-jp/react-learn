import React, { Component } from "react"

const ctx = React.createContext()

class ChildA extends Component {
  static contextType = ctx
  render() {
    return (
      <div>
        <p>
          这里是ChildA组件: a:{this.context.a} b:{this.context.b}
        </p>

        <button
          onClick={() => {
            this.context.changeA(this.context.a - 1)
          }}
        >
          下级组件A：a-1
        </button>
      </div>
    )
  }
}

function ChildB(props) {
  return (
    <ctx.Consumer>
      {value => {
        return (
          <>
            <p>
              这里是ChildB组件: a:{value.a} b:{value.b}
            </p>
            <button
              onClick={() => {
                value.changeA(0)
              }}
            >
              下级组件B: a=0
            </button>
          </>
        )
      }}
    </ctx.Consumer>
  )
}

export default class NewContext extends Component {
  state = {
    a: 1,
    b: "hello",
    changeA: newVal => {
      this.setState({
        a: newVal,
      })
    },
  }
  render() {
    return (
      <ctx.Provider value={this.state}>
        <button
          onClick={() => {
            this.setState({
              a: this.state.a + 1,
            })
          }}
        >
          上级组件，a+1
        </button>
        <ChildA />
        <ChildB />
      </ctx.Provider>
    )
  }
}
