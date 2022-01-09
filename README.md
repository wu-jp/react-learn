# LayoutEffect Hook

<aside>
💡 尽可能使用标准的 `useEffect` 以避免阻塞视觉更新

</aside>

函数签名与 `useEffect` 相同，但它会在所有的 DOM 变更之后同步调用 effect

- useEffect：浏览器渲染完成后，用户看到新的渲染结果之后
- useLayoutEffectHook：完成了DOM改动，但还没有呈现给用户

注意：

应该尽量使用useEffect，因为它不会导致渲染阻塞，如果出现了问题，再考虑使用useLayoutEffectHook

```jsx
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
```