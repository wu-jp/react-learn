// TODO：ref转发高阶组件
import React, { Component } from "react"

function withLog(Comp) {
  class LogComp extends Component {
    componentDidMount() {
      console.log(`日志：组件${Comp.name}被创建了！${Date.now()}`)
    }
    componentWillUnmount() {
      console.log(`日志：组件${Comp.name}被销毁了！${Date.now()}`)
    }
    render() {
      const { forwardRef, ...rest } = this.props
      return <Comp ref={forwardRef} {...rest} />
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogComp {...props} forwardRef={ref}></LogComp>
  })
}

class A extends React.Component {
  //不再关注跟该组件不相关的事情
  render() {
    return <h1>组件A:{this.props.text}</h1>
  }
}

let AComp = withLog(A)

export default class App extends Component {
  aRef = React.createRef()

  componentDidMount() {
    console.log(this.aRef)
  }

  render() {
    return (
      <div>
        <AComp text="123" ref={this.aRef}></AComp>
      </div>
    )
  }
}
