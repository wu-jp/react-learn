import React, { useLayoutEffect, useState, useRef, useEffect } from "react"

export default function App() {
  console.log("render App")
  const [n, setN] = useState(0)
  const h1Ref = useRef()
  // 使用useLayoutEffect来读取 DOM 布局并同步触发重渲染
  useLayoutEffect(() => {
    return () => {
      h1Ref.current.innerText = Math.random().toFixed(6)
    }
  })
  return (
    <div>
      <h1 ref={h1Ref}>{n}</h1>
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
