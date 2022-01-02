import React from "react"
import ReactDOM from "react-dom"

function ChildA() {
  // ReactDOM.createPortal()
  // 第一个参数为：要渲染的React元素
  // 第二个参数为：要插入的真实DOM地址
  // 返回值：第一个参数
  return ReactDOM.createPortal(
    <div>
      <h1>ChildA</h1>
      <ChildB />
    </div>,
    document.querySelector(".modal")
  )
}

function ChildB() {
  return (
    <div>
      <h1>ChildB</h1>
    </div>
  )
}

export default function App() {
  return (
    <div
      onClick={e => {
        console.log("这里是App组件", e.target)
      }}
    >
      <h1>App</h1>
      <ChildA />
    </div>
  )
}
