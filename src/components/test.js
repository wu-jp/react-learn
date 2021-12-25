// TODO：ref转发函数组件
import React, { Component } from "react"

// 被转发的组件 必须通过第二个参数接收转发的ref
function A(props, ref) {
  return <h1 ref={ref}>函数组件A:{props.text}</h1>
}

// 通过 NewA组件 转发 组件A 的ref
const NewA = React.forwardRef(A)

export default class App extends Component {
  aRef = React.createRef()

  componentDidMount() {
    console.log(this.aRef)
  }

  render() {
    return (
      <div>
        {/* NewA不会对ref做任何处理，会把它当作属性传给A组件 */}
        <NewA ref={this.aRef} text="123"></NewA>
      </div>
    )
  }
}
