// 嵌套路由1
import React from "react"
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom"
import "./App.css"

function Invoices() {
  return (
    <div>
      <h1>Invoices</h1>
      <Outlet />
    </div>
  )
}
function Invoice() {
  let { invoiceId } = useParams()
  return <h1>Invoice {invoiceId}</h1>
}

function SentInvoices() {
  return <h1>Sent Invoices</h1>
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />}></Route>
          <Route path="sent" element={<SentInvoices />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
