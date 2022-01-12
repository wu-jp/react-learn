import React from "react"
import { Route, Switch, Link } from "react-router-dom/cjs/react-router-dom.min"
// import Layout from "./components/Layout"
import Login from "./pages/Login"
import Admin from "./pages/Admin"

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" component={Admin} />
      </Switch>
    </div>
  )
}
