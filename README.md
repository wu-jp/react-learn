# ref (reference: 引用)

> Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。

**使用场景**：下面是几个适合使用 refs 的情况：

- 管理焦点，文本选择或媒体播放。
- 触发强制动画。
- 集成第三方 DOM 库。

> 勿过度使用 Refs


**创建Refs**

```js
this.myRef = React.createRef()
```

**访问Refs**
```js
const node = this.myRef.current;
```

## 为MOD元素添加Refs

```js
import React, { Component } from "react"

export default class Test extends Component {
  constructor(props) {
    super(props)
    // 创建refs，通过ref属性绑定到React元素
    this.inputRef = React.createRef()
    // 修改handel的this绑定
    this.handel = this.handel.bind(this)
  }

  handel() {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" />
        <button onClick={this.handel}>聚焦</button>
      </div>
    )
  }
}
```

## 为class组件添加Refs

```js
import React, { Component } from "react"

class TestH1 extends Component {
  log() {
    console.log("这里是TestH1组件")
  }
  render() {
    return <h1>这里是TestH1组件</h1>
  }
}

export default class Test extends Component {
  constructor(props) {
    super(props)

    this.testRef = React.createRef()
    this.handel = this.handel.bind(this)
  }

  handel() {
    // 访问refs
    this.testRef.current.log()
  }

  render() {
    return (
      <div>
        <button onClick={this.handel}>调用子组件的方法</button>
        <TestH1 ref={this.testRef}></TestH1>
      </div>
    )
  }
}
```

## 回调Refs

以函数方式设置Refs，称之为**回调Refs**，这个函数接收React组件实例或者HTML DOM元素最为参数，将他储存并进行访问

```js
import React, { Component } from "react"

export default class Test extends Component {
  constructor(props) {
    super(props)

    this.testRef = null

    // element为真实的DOM元素，并将它储存到this.testRef
    this.setTextInputRef = element => {
      this.testRef = element
    }

    // 访问refs
    this.handel = () => {
      this.testRef.focus()
    }
  }

  render() {
    return (
      <div>
        <input ref={this.setTextInputRef} type="text" />
        <button onClick={this.handel}>聚焦</button>
      </div>
    )
  }
}
```

**关于回调 refs 的说明**

> 如果 ref 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 null，然后第二次会传入参数 DOM 元素。这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。

**不推荐使用String类型的Refs**