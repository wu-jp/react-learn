import React, { useState, useCallback } from "react"

class Test extends React.PureComponent {
  render() {
    console.log("Test Render")
    return (
      <div>
        <p>text: {this.props.text}</p>
        <button
          onClick={() => {
            this.props.onClick()
          }}
        >
          改变文字
        </button>
      </div>
    )
  }
}

function Parent() {
  console.log("Parent Render")
  const [txt, setTxt] = useState(1)
  const [num, setNum] = useState(0)
  const fn = () => {
    setTxt(Math.random())
  }
  const handleClick = useCallback(fn, [])
  return (
    <div>
      <Test text={txt} onClick={handleClick} />
      <input
        type="number"
        value={num}
        onChange={e => {
          setNum(e.target.value)
        }}
      />
    </div>
  )
}

export default function App() {
  return (
    <div>
      <Parent />
    </div>
  )
}
