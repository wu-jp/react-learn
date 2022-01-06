# Effect Hook

<aside>
💡 Effect Hook：用于处理函数组件中的副作用

</aside>

副作用：

1. ajax
2. 计时器
3. 其他异步操作
4. 更改真实DOM
5. 本地存储
6. 其他会对外部产生影响的操作

**useEffect：一个函数**

- 参数一：接收一个函数作为参数，接受的函数就是进行副作用操作的函数
- 参数二：接收一个数组作为参数

简单的Effect Hook的用法：

```jsx
import React, { useState, useEffect } from "react"

export default function App() {
  const [n, setN] = useState(0)
  useEffect(() => {
    console.log("这里是副作用函数")
    document.title = `Effect Hook ${n}`
  })
  return (
    <div>
      <button
        onClick={() => {
          setN(n + 1)
        }}
      > +1 </button>
    </div>
  )
}
```

**注意细节：**

1. 副作用函数的运行时间点，是在页面完成真实的UI渲染之后。因此它的执行是异步的，并且不会阻塞浏览器
    - 与类组件中componentDidMount和componentDidUpdate的区别？
        1. componentDidMount和componentDidUpdate，更改了真实DOM，但是用户还没有看到UI更新，同步的
        2. useEffect中的副作用函数，更改了真实DOM，并且用户已经看到了UI更新，异步的。
2. 每个函数组件中，可以多次使用useEffect，但不要放入判断或循环等代码块中。
3. useEffect中的副作用函数（也就是第一个参数），可以有返回值，返回值必须是一个函数，该函数叫做清理函数
    1. 该函数运行时间点，在每次运行副作用函数之前
    2. 首次渲染组件不会运行
    3. 组件被销毁时一定会运行

    ```jsx
    import React, { useState, useEffect } from "react"

    let timer = null

    function stop() {
      console.log("这里是清理函数")
      clearInterval(timer)
    }

    function MoveBlock(props) {
      const divRef = React.createRef()

      useEffect(() => {
        console.log("这里是副作用函数")

        const div = divRef.current
        let index = 0
        let left = props.left / 50 //每16毫秒移动的距离X轴
        let top = props.top / 50 //每16毫秒移动的距离Y轴
        timer = setInterval(() => {
          index++
          const newLeft = index * left
          const newTop = index * top
          div.style.left = newLeft + "px"
          div.style.top = newTop + "px"
          if (index === 50) {
            stop()
          }
        }, 16)

        return stop
      })

      return (
        <div
          ref={divRef}
          style={{
            width: 100,
            height: 100,
            backgroundColor: "#f40",
            position: "fixed",
          }}
        ></div>
      )
    }

    export default function App() {
      const [point, setPoint] = useState({ x: 0, y: 0 })
      useEffect(() => {})
      return (
        <div>
          <MoveBlock left={point.x} top={point.y} />
          <p
            style={{
              paddingTop: 300,
            }}
          >
            x:{" "}
            <input
              type="number"
              value={point.x}
              onChange={e => {
                setPoint({
                  ...point,
                  x: e.target.value,
                })
              }}
            />
            y:{" "}
            <input
              type="number"
              value={point.y}
              onChange={e => {
                setPoint({
                  ...point,
                  y: e.target.value,
                })
              }}
            />
          </p>
        </div>
      )
    }
    ```

4. useEffect函数，可以传递第二个参数
    1. 第二个参数是一个数组
    2. 数组中记录该副作用的依赖数据
    3. 当组件重新渲染后，只有依赖数据与上一次不一样的时，才会执行副作用

        ```jsx
        import React, { useState, useEffect } from "react"

        let timer = null

        function stop() {
          console.log("这里是清理函数")
          clearInterval(timer)
        }

        function MoveBlock(props) {
          const divRef = React.createRef()

          useEffect(() => {
            console.log("这里是副作用函数")

            const div = divRef.current
            let index = 0
            let left = props.left / 50 //每16毫秒移动的距离X轴
            let top = props.top / 50 //每16毫秒移动的距离Y轴
            timer = setInterval(() => {
              index++
              const newLeft = index * left
              const newTop = index * top
              div.style.left = newLeft + "px"
              div.style.top = newTop + "px"
              if (index === 50) {
                stop()
              }
            }, 16)

            return stop
          }, [props.left, props.top])

          return (
            <div
              ref={divRef}
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#f40",
                position: "fixed",
              }}
            ></div>
          )
        }

        export default function App() {
          const [point, setPoint] = useState({ x: 0, y: 0 })
          useEffect(() => {})
          const txtX = React.createRef()
          const txtY = React.createRef()
          return (
            <div>
              <MoveBlock left={point.x} top={point.y} />
              <p
                style={{
                  paddingTop: 300,
                }}
              >
                x: <input ref={txtX} type="number" />
                y: <input ref={txtY} type="number" />
                <button
                  onClick={() => {
                    setPoint({
                      x: txtX.current.value,
                      y: txtY.current.value,
                    })
                  }}
                >
                  确定
                </button>
              </p>
            </div>
          )
        }
        ```

    4. 所以，当传递了依赖数据之后，如果数据没有发生变化
        1. 副作用函数仅在第一次渲染后运行
        2. 清理函数仅在卸载组件后运行

    ```jsx
    import React, { useState, useEffect } from "react"

    function Test(props) {
      useEffect(() => {
        console.log("这里是副作用函数")
        return () => {
          console.log("这里是清理函数")
        }
      })

      return (
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "#f40",
          }}
        ></div>
      )
    }

    export default function App() {
      const [visible, setVisible] = useState(true)
      return (
        <div>
          {visible && <Test />}
          <button
            onClick={() => {
              setVisible(!visible)
            }}
          >
            显示/隐藏
          </button>
        </div>
      )
    }
    ```

5. 副作用函数中，如果使用了函数上下文中的变量，则由于闭包的影响，会导致副作用函数中变量不会实时变化。

    ```jsx
    import React, { useState, useEffect } from "react"

    export default function App() {
      const [n, setN] = useState(0)
      useEffect(() => {
        setTimeout(() => {
          console.log(n)
        }, 3000)
      })
      return (
        <div>
          <button
            onClick={() => {
              setN(n + 1)
            }}
          >
            +1
          </button>
        </div>
      )
    }
    ```

    ```jsx
    import React, { useState, useEffect } from "react"

    export default function App() {
      const [n, setN] = useState(10)
      useEffect(() => {
        if (n === 0) {
          return
        }
        // 倒计时10s
        // 某一次渲染完成后，需要根据当前n的值，1秒后重新渲染
        setTimeout(() => {
          setN(n - 1)
        }, 1000)
      }, [n])
      return (
        <div>
          <h1>{n}</h1>
        </div>
      )
    }
    ```

6. 副作用函数在每次注册时，会覆盖掉之前的副作用函数，因此，尽量保持副作用函数稳定，否则控制起来会比较复杂。

    ```jsx
    import React, { useState, useEffect } from "react"

    let n = 1

    function func1() {
      console.log("odd 副作用函数")
      return () => {
        console.log("odd 清理函数")
      }
    }

    function func2() {
      console.log("even 副作用函数")
      return () => {
        console.log("even 清理函数")
      }
    }

    export default function App() {
      const [, forceUpdate] = useState({})
      useEffect(n % 2 === 0 ? func2 : func1)
      n++
      return (
        <div>
          <button
            onClick={() => {
              forceUpdate({})
            }}
          >
            强制刷新
          </button>
        </div>
      )
    }
    ```