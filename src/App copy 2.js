import React, { useState, useRef, useEffect } from "react"

export default function App() {
  const [n, setN] = useState(10)
  //利用useRef创建一个timer对象，用于储存定时器变量 timer = {current: 定时器}
  let timer = useRef()

  useEffect(() => {
    if (n === 0) {
      clearTimeout(timer.current)
      return
    }
    timer.current = setTimeout(() => {
      setN(n - 1)
    }, 1000)
    return () => {
      clearTimeout(timer.current)
    }
  }, [n])
  return <div>倒计时：{n} </div>
}
