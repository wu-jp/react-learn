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
          // 当我们想通过连续调用两次修改方法让状态加2，必须使用回调函数的方式
          // 状态修改会等到点击事件完成后，统一进行状态处理

          // correct
          setN(n => n + 1)
          setN(n => n + 1)

          // error
          // setN(n + 1)
          // setN(n + 1)
        }}
      >
        +
      </button>
    </div>
  )
}
