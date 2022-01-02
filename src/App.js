import React from "react"
import ErrorBound from "./components/ErrorBound"

function ChildA() {
  return (
    <div
      style={{
        height: 350,
        width: 350,
        border: "2px solid green",
      }}
    >
      <h1>ChildA</h1>
      <ChildB />
    </div>
  )
}

function ChildB() {
  // 模拟错误
  let arr = undefined
  let arrLi = arr.map(item => <li key={item}>{item}</li>)
  return (
    <div
      style={{
        height: 200,
        width: 200,
        border: "2px solid red",
      }}
    >
      {arrLi}
      <h1>ChildB</h1>
    </div>
  )
}

function ChildC() {
  return (
    <div>
      <h1>这里是ChildC组件</h1>
    </div>
  )
}

export default function App() {
  return (
    <div
      style={{
        height: 500,
        width: 500,
        border: "2px solid",
      }}
    >
      <h1>App组件</h1>
      <ChildC />
      <ErrorBound>
        <ChildA />
      </ErrorBound>
    </div>
  )
}
