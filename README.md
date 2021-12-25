# Ref转发
> React文档：你不能在函数组件上使用 ref 属性，因为他们没有实例

## 父组件如何通过ref访问函数子组件A的DOM？

通过ref转发的过程：
1. 通过React.forwardRef()方法创建一个组件**NewA**
   参数：**函数**组件，不能是类组件，并且函数组件需要有第二个参数得到ref
   返回：新的组件
2. 通过React.createRef()方法创建一个React Ref，并将他赋值
3. 我们通过指定 ref 为 JSX 属性，将其向下传递给 `<NewA ref={ref}>`
4. React给子函数组件第二个参数ref
5. 将ref参数向下转发到需要的Dom元素
6. 当ref挂载完成时，ref.current就指向该Dom元素

例子：
```js
// TODO：ref转发函数组件
import React, { Component } from "react"

// 第四步.被转发的组件 必须通过第二个参数接收转发的ref
function A(props, ref) {
  // 第五步
  return <h1 ref={ref}>函数组件A:{props.text}</h1>
}

// 第一步
const NewA = React.forwardRef(A)

export default class App extends Component {
  // 第二步
  aRef = React.createRef()

  //第六步
  componentDidMount() {
    console.log(this.aRef)
  }

  render() {
    return (
      <div>
        {/* 第三步.NewA不会对ref做任何处理，会把它当作属性传给A组件 */}
        <NewA ref={this.aRef} text="123"></NewA>
      </div>
    )
  }
}
```


## 父组件如何通过ref访问类组件的DOM？

通过ref转发的过程：
1. 通过React.forwardRef()方法创建一个组件**NewA**
   参数：forwardRef的内函数，该函数包括props和ref(React.createRef创建的ref),将内函数的两个参数都最为JSX的属性，传递给返回的组件（ref不能作为属性名，因为this.props.ref不可读）
   返回：新的组件
2. 通过React.createRef()方法创建一个React Ref，并将他赋值
3. 我们通过指定 ref 为 JSX 属性，将其向下传递给 `<NewA ref={ref}>`
4. 通过类组件的this.props.xxx拿到
5. 将ref参数向下转发到需要的Dom元素
6. 当ref挂载完成时，ref.current就指向该Dom元素

例子：
```js
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
```

## 如何通过ref访问高阶组件

```js
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
      // 关键✨✨✨
      const { forwardRef, ...rest } = this.props
      return <Comp ref={forwardRef} {...rest} />
    }
  }

  // 关键✨✨✨
  return React.forwardRef((props, ref) => {
    return <LogComp {...props} forwardRef={ref}></LogComp>
  })
}

class A extends React.Component {
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
```