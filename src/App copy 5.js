// Relative Links  or 'Not Fount' 路由
import React from "react"
import { Routes, Route, Link, Outlet, useParams, useNavigate } from "react-router-dom"
import "./App.css"

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
function Dashboard() {
  let navigate = useNavigate()
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="invoices">Invoices</Link> {"|"}
        <Link to="team">Team</Link> {"|"}
        <button
          onClick={() => {
            navigate("/dashboard/test/w743483274237")
          }}
        >
          Test
        </button>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}
function Invoices() {
  return <h1>Invoices</h1>
}

function Team() {
  return <h1>Team组件</h1>
}
function Test() {
  let params = useParams()
  return <h1>Test Id:{params.id}</h1>
}

function Default() {
  return <h1>Dashboard 默认组件</h1>
}

function NotFound() {
  return <h1>NotFound 组件</h1>
}

function App() {
  let navigate = useNavigate()
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> {"|"} <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Default></Default>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          <Route path="invoices" element={<Invoices />}></Route>
          <Route path="team" element={<Team />}></Route>
          <Route path="test/:id" element={<Test />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
