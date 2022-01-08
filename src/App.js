import React, { useContext } from "react"
import { ctx } from "./components/Context"
import Test from "./components/test"

export default function App() {
  return (
    <div>
      <ctx.Provider value="abc">
        <Test />
      </ctx.Provider>
    </div>
  )
}
