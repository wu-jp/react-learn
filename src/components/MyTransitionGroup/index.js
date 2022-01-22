import React, { useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import "./index.css"
import "animate.css"
import { v4 as uuidv4 } from "uuid"

export default function MyTransitionGroup() {
  const [list, setList] = useState([
    { uuid: uuidv4(), name: "任务1" },
    { uuid: uuidv4(), name: "任务2" },
  ])
  return (
    <div>
      <TransitionGroup>
        {list.map(item => (
          <CSSTransition
            key={item.uuid}
            timeout={500}
            classNames={{
              enter: "animate__fadeInRight",
              exit: "animate__fadeOutLeft",
            }}
          >
            <div className="animate__animated">
              {item.name}
              <button
                onClick={() => {
                  setList(list.filter(i => i.uuid !== item.uuid))
                }}
              >
                删除
              </button>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <button
        onClick={() => {
          let name = window.prompt("请输入任务名称")
          if (!name) return
          setList([...list, { uuid: uuidv4(), name }])
        }}
      >
        添加
      </button>
    </div>
  )
}
