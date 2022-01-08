# Callback Hook

函数名：useCallback

用于得到一个固定引用值的函数，通常用它进行性能优化

该函数有两个参数：

1. 函数，useCallback会固定该函数的引用，只要依赖项没有发生变化，则始终返回之前函数的地址
2. 数组，记录依赖项

该函数返回：引用相对固定的函数地址

```jsx
import React, { useState, useCallback } from "react"

class Test extends React.PureComponent {
  render() {
    console.log("Test Render")
    return (
      <div>
        <p>text: {this.props.text}</p>
        <button
          onClick={() => {
            this.props.onClick()
          }}
        >
          改变文字
        </button>
      </div>
    )
  }
}

function Parent() {
  console.log("Parent Render")
  const [txt, setTxt] = useState(1)
  const [num, setNum] = useState(0)
  const fn = () => {
    setTxt(Math.random())
  }
  const handleClick = useCallback(fn, [])
  return (
    <div>
      <Test text={txt} onClick={handleClick} />
      <input
        type="number"
        value={num}
        onChange={e => {
          setNum(e.target.value)
        }}
      />
    </div>
  )
}

export default function App() {
  return (
    <div>
      <Parent />
    </div>
  )
}
```