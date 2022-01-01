import React from "react"
import withMouseListener from "./HOCMouseTest/withMouseListener"

import ShowMouseDiv from "./HOCMouseTest/ShowMouseDiv"
import ShowMousePoint from "./HOCMouseTest/ShowMousePoint"

const RenderPoint = withMouseListener(ShowMousePoint)
const RenderDiv = withMouseListener(ShowMouseDiv)

export default function test() {
  return (
    <div>
      <RenderPoint />
      <RenderDiv />
    </div>
  )
}
