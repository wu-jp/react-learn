import React, { Component } from "react"

const ctx1 = React.createContext()
const ctx2 = React.createContext()

class ChildA extends Component {
  static contextType = ctx1
  render() {
    let obj = {
      a: 890,
      b: "world",
    }
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

        <ctx2.Provider value={obj}>
          <ChildB />
        </ctx2.Provider>
      </div>
    )
  }
}

function ChildB(props) {
  return (
    <ctx1.Consumer>
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
            <ctx2.Consumer>
              {val => {
                return (
                  <p>
                    这里是A组件传的值：a:{val.a} b:{val.b}
                  </p>
                )
              }}
            </ctx2.Consumer>
          </>
        )
      }}
    </ctx1.Consumer>
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
      <ctx1.Provider value={this.state}>
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
      </ctx1.Provider>
    )
  }
}
