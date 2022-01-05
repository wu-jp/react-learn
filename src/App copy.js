import React, { useState } from "react"

export default function App() {
  const [n, setN] = useState(0)

  return (
    <div>
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
    </div>
  )
}
