import React, { useState, useEffect } from "react"

export default function App() {
  const [n, setN] = useState(0)
  useEffect(() => {
    console.log("这里是副作用函数")
    document.title = `Effect Hook ${n}`
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
