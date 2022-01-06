import React, { useState, useEffect } from "react"

function Test(props) {
  useEffect(() => {
    console.log("这里是副作用函数")
    return () => {
      console.log("这里是清理函数")
    }
  })

  return (
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#f40",
      }}
    ></div>
  )
}

export default function App() {
  const [visible, setVisible] = useState(true)
  return (
    <div>
      {visible && <Test />}
      <button
        onClick={() => {
          setVisible(!visible)
        }}
      >
        显示/隐藏
      </button>
    </div>
  )
}
