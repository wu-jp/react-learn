import React from "react"
import { Route } from "react-router-dom/cjs/react-router-dom.min"

function A() {
  return <div>这里是A组件</div>
}

function B() {
  return <div>这里是B组件</div>
}

function C() {
  return <div>这里是C组件</div>
}

export default function App() {
  return (
    <div>
      <Route path="/a" component={A} />
      <Route path="/a/b" component={B} />
      <Route path="/c" component={C} />
    </div>
  )
}
