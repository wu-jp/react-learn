import React, { useState, useRef, useEffect } from "react"

export default function App() {
  const [n, setN] = useState(10)
  //利用useRef创建一个timer对象，用于储存定时器变量 nRef = {current: n}
  let nRef = useRef(n)

  useEffect(() => {
    let timer = setInterval(() => {
      nRef.current--
      setN(nRef.current)
      if (nRef.current === 0) {
        clearInterval(timer)
      }
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return <div>倒计时：{n} </div>
}
