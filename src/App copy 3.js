// 嵌套路由2
import React from "react"
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom"
import "./App.css"

function Invoices() {
  return <h1>Invoices</h1>
}

function Dashboard() {
  return <h1>Dashboard</h1>
}

function Layout() {
  return (
    <div>
      <h1>Welcome to the app</h1>
      <nav>
        <Link to="invoices">Invoices</Link> | <Link to="dashboard">Dashboard</Link>
      </nav>
      <div className="content">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="invoices" element={<Invoices />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
