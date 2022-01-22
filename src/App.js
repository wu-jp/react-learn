// 子Routes
import React from "react"
import { Routes, Route, Link, Outlet, useParams, useNavigate } from "react-router-dom"
import "./App.css"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard/*" element={<Dashboard />} />
    </Routes>
  )
}
function Home() {
  return <h1>Home</h1>
}

function DashboardGraphs() {
  return <h1>DashboardGraphs</h1>
}
function InvoiceList() {
  return <h1>InvoiceList</h1>
}

function Dashboard() {
  return (
    <div>
      <p>Look, more routes!</p>
      <Routes>
        <Route path="/" element={<DashboardGraphs />} />
        <Route path="invoices" element={<InvoiceList />} />
      </Routes>
    </div>
  )
}
export default App
