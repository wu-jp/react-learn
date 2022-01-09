import React, { useState, useRef } from "react"

export default function App() {
  const [n, setN] = useState(10)
  //通过useRef得到一个ref对象
  const inpRef = useRef()

  return (
    <div>
      <input type="text" ref={inpRef} />
      <button
        onClick={() => {
          console.log(inpRef.current.value)
        }}
      >
        获取input的值
      </button>
    </div>
  )
}
