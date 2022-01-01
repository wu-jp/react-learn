import React from "react"

export default function ShowMouseDiv(props) {
  return (
    <div>
      <div
        className="son"
        style={{
          left: props.x - 50,
          top: props.y - 50,
        }}
      ></div>
    </div>
  )
}
