import React, { useContext } from "react"
import { ctx } from "./Context"

export default function Test() {
  const value = useContext(ctx)
  return <div>value: 上下文内容{value}</div>
}
