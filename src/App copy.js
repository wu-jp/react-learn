// 基础用法和默认路由
import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import "./App.css"
import MyTransition from "./components/MyTransition"
import MyCSSTransition from "./components/MyCSSTransition"
import MySwitchTransition from "./components/MySwitchTransition"
import MyTransitionGroup from "./components/MyTransitionGroup"

function IndexRouter() {
  return (
    <div>
      <h3>默认路由</h3>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>welcome to React Router</h1>
      <nav>
        <Link to="/MyTransition">MyTransition</Link> | <Link to="/MyCSSTransition">MyCSSTransition</Link> |{" "}
        <Link to="/MySwitchTransition">MySwitchTransition</Link> |{" "}
        <Link to="/MyTransitionGroup">MyTransitionGroup</Link>
      </nav>
      <Routes>
        {/* 默认路由 */}
        <Route index element={<IndexRouter />} />
        <Route path="/MyTransition" element={<MyTransition />} />
        <Route path="/MyCSSTransition" element={<MyCSSTransition />} />
        <Route path="/MySwitchTransition" element={<MySwitchTransition />} />
        <Route path="/MyTransitionGroup" element={<MyTransitionGroup />} />
      </Routes>
    </div>
  )
}

export default App
