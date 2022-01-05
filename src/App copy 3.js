import React, { useState } from "react"

export default function App() {
  const [n, setN] = useState(0)
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <p
        style={{
          display: visible ? "block" : "none",
        }}
      >
        <button
          onClick={() => {
            setN(n - 1)
          }}
        >
          -
        </button>
        <span>{n}</span>
        <button
          onClick={() => {
            setN(n + 1)
          }}
        >
          +
        </button>
      </p>
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
