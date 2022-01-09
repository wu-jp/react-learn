import React, { useLayoutEffect, useState, useRef, useEffect, useDebugValue } from "react"

function useTest() {
  // useDebugValue用于调试
  useDebugValue("学生列表")
  const [students] = useState([])
  return students
}

export default function App() {
  useState(0)
  useRef()
  useLayoutEffect(() => {
    return () => {}
  })
  useEffect(() => {
    return () => {}
  })
  useTest()
  return <div></div>
}
