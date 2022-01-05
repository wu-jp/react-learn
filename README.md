# State Hook

<aside>
💡 State Hook是一个在函数组件中使用的的函数（useState），用于在函数组件中使用状态。

</aside>

 **useState**

- 函数的第一个参数：这个参数的值为状态的默认值
- 函数的返回值：是一个数组，该数组中包括两项
    - 第一项：当前状态的值
    - 第二项：改变当前状态值的函数

```jsx
// 示例：
import React, { useState } from "react"

export default function App() {
	// n:状态值
	// setN:修改状态值n的方法
  const [n, setN] = useState(0)

  return (
    <div>
      <button onClick={() => { setN(n - 1) }}> - </button>
      <span>{n}</span>
      <button onClick={() => { setN(n + 1) }}> + </button>
    </div>
  )
}
```

一个函数在组件中可以有多个状态，这种做法有利于横切关注点。

**注意细节：**

1. useState最好写在函数的起始位置，便于阅读
2. useState严禁出行在代码块中（判断、循环）
3. useState返回的函数，引用不变（节约内存空间）
4. 使用函数改变数据，若数据和之前的数据完全相等（使用**Object.is**比较），不会导致重新渲染。已到达优化效率的目的
5. 使用函数改变数据，传入的值不会和原来的数据进行合并，而是直接替换。

    ```jsx
    import React, { useState } from "react"

    export default function App() {
      const [data, setData] = useState({ x: 1, y: 1 })

      return (
        <div>
          <p> x:{data.x} y:{data.y} </p>
          <button
            onClick={() => {
    					// 修改data.x的时候，必须要重新传入整个data值，而不是只传入data.x
    		      // error： setData(x: data.x + 1)
              setData({
                ...data,
                x: data.x + 1,
              })
            }}
          > x+1 </button>
        </div>
      )
    }
    ```

6. 如果要实现强制刷新组件：
    1. 类组件：使用`this.forceUpdate`函数
    2. 函数组件：使用一个空的useState，并调用它返回的第二个函数，值为空对象（利用Object.is比较两个对象一定不相等的原理）
7. 如果某些状态之间没有必要的联系，应该分为不同的状态，而不是合并成一个对象

    ```jsx
    import React, { useState } from "react"

    export default function App() {
    	// 状态n和状态visible之间没有必然的联系，所有应该分开定义
      const [n, setN] = useState(0)
      const [visible, setVisible] = useState(true)

      return (
        <div>
          <p style={{  display: visible ? "block" : "none", }} >
            <button
              onClick={() => {
                setN(n - 1)
              }}
            > - </button>
            <span>{n}</span>
            <button
              onClick={() => {
                setN(n + 1)
              }}
            > + </button>
          </p>
          <button
            onClick={() => {
              setVisible(!visible)
            }}
          > 显示/隐藏 </button>
        </div>
      )
    }
    ```

8. 和类组件的状态一样，函数组件中改变状态可能是异步的（在DOM事件中），多个状态变化会合并以提高效率，此时，不能信任之前的状态，而应该使用回调函数的方式改变状态。如果状态变化要用到之前的状态，应尽量用函数。

    ```jsx
    import React, { useState } from "react"

    export default function App() {
      const [n, setN] = useState(0)

      return (
        <div>
          <button
            onClick={() => {
              setN(n - 1)
            }}
          > - </button>
          <span>{n}</span>
          <button
            onClick={() => {
    					// 当我们想通过连续调用两次修改方法让状态加2，必须使用回调函数的方式
    					// 状态修改会等到点击事件完成后，统一进行状态处理

              // correct
              setN(n => n + 1)
              setN(n => n + 1)

              // error
              // setN(n + 1)
              // setN(n + 1)
            }}
          > + </button>
        </div>
      )
    }
    ```