// useNavigate钩子
import React from "react"
import { Routes, Route, Link, Outlet, useParams, useNavigate } from "react-router-dom"
import "./App.css"

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Outlet></Outlet>
    </div>
  )
}
function Invoices() {
  return <h1>Invoices</h1>
}
function Dashboard() {
  return <h1>Dashboard</h1>
}
function App() {
  let navigate = useNavigate()
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="invoices" element={<Invoices />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>

      <button
        onClick={() => {
          let url = window.prompt("请输入完整路径")
          navigate(url)
        }}
      >
        切换路由
      </button>
    </div>
  )
}

export default App
