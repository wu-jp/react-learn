// 多个兄弟Routes
import React from "react"
import { Routes, Route, Link, Outlet, useParams, useNavigate } from "react-router-dom"
import "./App.css"
function Sidebar(props) {
  return <div>{props.children}</div>
}
function MainNav() {
  return <h1>MainNav</h1>
}
function DashboardNav() {
  return <h1>DashboardNav</h1>
}
function MainContent(props) {
  return <div>{props.children}</div>
}
function Home() {
  return (
    <div>
      Home<Outlet></Outlet>
    </div>
  )
}
function About() {
  return <h1>About</h1>
}
function Support() {
  return <h1>Support</h1>
}

function Dashboard() {
  return (
    <div>
      Dashboard<Outlet></Outlet>
    </div>
  )
}
function Invoices() {
  return <h1>Invoices</h1>
}
function Team() {
  return <h1>Team</h1>
}

function NotFound() {
  return <h1>NotFound</h1>
}

function App() {
  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path="/" element={<MainNav />} />
          <Route path="dashboard" element={<DashboardNav />} />
        </Routes>
      </Sidebar>

      <MainContent>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="support" element={<Support />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="invoices" element={<Invoices />} />
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainContent>
    </div>
  )
}

export default App
