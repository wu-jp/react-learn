import React, { useImperativeHandle, useRef, forwardRef } from "react"

function Test(props, ref) {
  useImperativeHandle(
    ref,
    () => ({
      method: () => {
        console.log("我是Test组件上的方法")
      },
    }),
    []
  )
  return <h1>这里是Test Components</h1>
}

// React.forwardRef 会创建一个React组件，这个组件能够将其接受的 ref 属性转发到其组件树下的另一个组件中
// React.forwardRef 接受渲染函数作为参数。React 将使用 props 和 ref 作为参数来调用此函数
const TestWard = forwardRef(Test)

export default function App() {
  let testRef = useRef()

  return (
    <div>
      <TestWard ref={testRef} />
      <button
        onClick={() => {
          testRef.current.method()
        }}
      >
        调用test的方法
      </button>
    </div>
  )
}
