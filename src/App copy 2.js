import React, { useState, useEffect } from "react"

let timer = null

function stop() {
  console.log("这里是清理函数")
  clearInterval(timer)
}

function MoveBlock(props) {
  const divRef = React.createRef()

  useEffect(() => {
    console.log("这里是副作用函数")

    const div = divRef.current
    let index = 0
    let left = props.left / 50 //每16毫秒移动的距离X轴
    let top = props.top / 50 //每16毫秒移动的距离Y轴
    timer = setInterval(() => {
      index++
      const newLeft = index * left
      const newTop = index * top
      div.style.left = newLeft + "px"
      div.style.top = newTop + "px"
      if (index === 50) {
        stop()
      }
    }, 16)

    return stop
  })

  return (
    <div
      ref={divRef}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#f40",
        position: "fixed",
      }}
    ></div>
  )
}

export default function App() {
  const [point, setPoint] = useState({ x: 0, y: 0 })
  useEffect(() => {})
  return (
    <div>
      <MoveBlock left={point.x} top={point.y} />
      <p
        style={{
          paddingTop: 300,
        }}
      >
        x:{" "}
        <input
          type="number"
          value={point.x}
          onChange={e => {
            setPoint({
              ...point,
              x: e.target.value,
            })
          }}
        />
        y:{" "}
        <input
          type="number"
          value={point.y}
          onChange={e => {
            setPoint({
              ...point,
              y: e.target.value,
            })
          }}
        />
      </p>
    </div>
  )
}
