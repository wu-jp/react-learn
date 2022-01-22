import React, { useState } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import "animate.css"
import "./index.css"

function MyTransition({ visible, children }) {
  return (
    <CSSTransition
      appear
      in={visible}
      timeout={1000}
      classNames={{
        appearActive: "animate__fadeInRight",
        appearDone: "animate__fadeInRight",
        enterActive: "animate__fadeInRight",
        enterDone: "chulai",
        exitActive: "animate__fadeOutLeft",
        exitDone: "jieshu",
      }}
    >
      {children}
    </CSSTransition>
  )
}

export default function MySwitchTransition() {
  const [visible, setVisible] = useState(true)
  return (
    <div>
      <div className="container">
        <MyTransition visible={visible}>
          <h1 className="animate__animated fast">An animated element1</h1>
        </MyTransition>
        <MyTransition visible={!visible}>
          <h1 className="animate__animated fast">An animated element2</h1>
        </MyTransition>
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
