// TODO：练习--class组件添加ref
import React, { Component } from "react"

class A extends Component {
  log() {
    console.log("这是类组件A的log方法")
  }
  render() {
    return <h1>类组件A:{this.props.text}</h1>
  }
}

// export default class App extends Component {
//   componentDidMount() {
//     console.log(this.txt)
//     this.txt.log()
//   }

//   getA = el => {
//     this.txt = el
//   }
//   render() {
//     return (
//       <div>
//         <A ref={this.getA} text="123"></A>
//       </div>
//     )
//   }
// }

// export default class App1 extends Component {
//   aRef = React.createRef()
//   componentDidMount() {
//     console.log(this.aRef.current)
//     this.aRef.current.log()
//   }
//   render() {
//     return (
//       <div>
//         <A ref={this.aRef} text="1234"></A>
//       </div>
//     )
//   }
// }

export default class App2 extends Component {
  componentDidMount() {
    console.log(this.aRef)
    this.aRef.log()
  }
  render() {
    return (
      <div>
        <A ref={el => (this.aRef = el)} text="12345"></A>
      </div>
    )
  }
}
