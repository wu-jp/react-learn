import React, { useState } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import "animate.css"
import "./index.css"

export default function MySwitchTransition() {
  const [visible, setVisible] = useState(true)
  return (
    <div>
      <div className="container">
        <SwitchTransition mode="out-in">
          <CSSTransition
            appear
            key={visible}
            timeout={500}
            classNames={{
              exit: "animate__fadeOutLeft",
              enter: "animate__fadeInRight",
            }}
          >
            <h1 className="animate__animated">{visible ? "title1" : "title2"}</h1>
          </CSSTransition>
        </SwitchTransition>
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
