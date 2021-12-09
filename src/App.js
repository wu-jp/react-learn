import React from "react"

import { A, B } from "./components/Comps"
import withLog from "./HOC/withLog"
import withLogin from "./HOC/withLogin"

let AComp = withLogin(withLog(A, "aaaaa"))
let BComp = withLogin(withLog(B, "bbbbb"))

export default function App() {
  return (
    <div>
      <AComp isLogin a={1}></AComp>
      <BComp isLogin b={2}></BComp>
    </div>
  )
}
