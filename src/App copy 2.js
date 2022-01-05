import React, { useState } from "react"

export default function App() {
  const [data, setData] = useState({ x: 1, y: 1 })

  return (
    <div>
      <p>
        x:{data.x} y:{data.y}
      </p>
      <button
        // 修改data.x的时候，必须要重新传入整个data值，而不是只传入data.x
        //error ： setData(x: data.x+1)
        onClick={() => {
          setData({
            ...data,
            x: data.x + 1,
          })
        }}
      >
        x+1
      </button>
    </div>
  )
}
