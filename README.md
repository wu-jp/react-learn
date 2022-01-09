# DebugValue Hook

useDebugValue：用于将自定义Hook的关联数据显示到调试栏

如果创建的自定义hook通用性比较高，可以选择使用它以方便调试

```jsx
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
```