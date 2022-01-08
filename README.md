# Memo Hook

用于保持一些比较稳定的数据，通常用于性能优化

如果React元素本身的引用没有发生变化，一定不会重新渲染

```js
import React, { useState, useMemo } from "react"

function Item(props) {
  console.log(props.value)
  return <li>{props.value}</li>
}

export default function App() {
  const [range, setRange] = useState({ min: 1, max: 5000 })
  const [n, setN] = useState(0)

  // 优化
  let list = useMemo(() => {
    const list = []
    for (let i = range.min; i < range.max; i++) {
      list.push(<Item key={i} value={i}></Item>)
    }
    return list
  }, [range])

  // 未优化
  // let list = []
  // for (let i = range.min; i <= range.max; i++) {
  //   list.push(<Item key={i} value={i}></Item>)
  // }

  return (
    <div>
      {list}
      <input
        type="number"
        value={n}
        onChange={e => {
          setN(e.target.value)
        }}
      />
    </div>
  )
}

```