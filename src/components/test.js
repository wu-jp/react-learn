import React, { Component } from "react"
import MouseListener from "./MouseRenderPropsTest/MouseListener"

const renderPoint = mouse => (
  <>
    当前坐标点x:{mouse.x} y:{mouse.y}
  </>
)

const renderDiv = mouse => (
  <div
    className="son"
    style={{
      left: mouse.x - 50,
      top: mouse.y - 50,
    }}
  ></div>
)

export default class test extends Component {
  render() {
    return (
      <div>
        <MouseListener render={renderPoint}></MouseListener>
        <MouseListener render={renderDiv}></MouseListener>
      </div>
    )
  }
}
