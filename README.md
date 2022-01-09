# Ref Hook

useRef函数：

1. 一个参数：默认值
2. 返回一个固定的对象，`{current: 值}`

例子一：利用ref将input元素变为可控元素

```jsx
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
```

例子二：实现一个倒计时功能

```jsx
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
  return <div>{n} </div>
}
```

例子三：实现一个倒计时功能

```jsx
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
  }, [nRef])
  return <div>{n} </div>
}
```