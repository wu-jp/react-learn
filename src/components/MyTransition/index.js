import React, { useState } from "react"
import { Transition } from "react-transition-group"
import "./index.css"

export default function MyTransition() {
  const [visible, setVisible] = useState(true)
  return (
    <div>
      <div className="container">
        <Transition in={visible} timeout={1000}>
          {state => {
            console.log(state)
            return <h1 className={`${state} base`}>哈哈哈Transition</h1>
          }}
        </Transition>
      </div>
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
