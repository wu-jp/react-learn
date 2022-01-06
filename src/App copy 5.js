import React, { useState, useEffect } from "react"

export default function App() {
  const [n, setN] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      console.log(n)
    }, 3000)
  })
  return (
    <div>
      <button
        onClick={() => {
          setN(n + 1)
        }}
      >
        +1
      </button>
    </div>
  )
}
