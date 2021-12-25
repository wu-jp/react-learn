// TODO：ref转发类组件
import React, { Component } from "react"

class A extends Component {
  render() {
    // 通过this.props.forwardRef接收ref
    return <h1 ref={this.props.forwardRef}>类组件A:{this.props.text}</h1>
  }
}

// 通过forwardRef属性将ref参数传递给类组件A
const NewA = React.forwardRef((props, ref) => {
  return <A forwardRef={ref} {...props}></A>
})

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
