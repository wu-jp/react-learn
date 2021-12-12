import React from "react"
import ReactDOM from "react-dom"
import src1 from "./assets/1.png"
import src2 from "./assets/2.png"
import src3 from "./assets/3.png"

const imgs = [src1, src2, src3]

let index = 0
let timer

const container = document.getElementById("root")

function render() {
  ReactDOM.render(<img src={imgs[index]} alt="" />, container)
}

function start() {
  stop()
  timer = setInterval(() => {
    index = (index + 1) % 3
    render()
  }, 2000)
}

function stop() {
  clearInterval(timer)
}
render()
start()

// 当指针移动到元素上时，触发事件
container.onmouseenter = function () {
  stop()
}
// 当指针从元素上移出时，触发事件
container.onmouseleave = function () {
  start()
}
