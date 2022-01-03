import React from "react"

export default function App() {
  return (
    <div>
      <h1>App组件</h1>
      <button
        onClick={() => {
          console.log("react: 点击了button")
        }}
      >
        点击
      </button>
    </div>
  )
}
document.querySelector("#root").addEventListener("click", function () {
  console.log("真实DOM：监听到了点击事件")
})

// 在react事件处理中：会将react事件冒泡到document元素中进行处理
