import React, { useState } from "react"
import { Transition } from "react-transition-group"

const duration = 1000

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

export default function App() {
  const [inProp, setInProp] = useState(true)
  return (
    <div>
      <Transition in={inProp} timeout={duration}>
        {state => {
          console.log(state)
          return (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              I'm a fade Transition!
            </div>
          )
        }}
      </Transition>
      <button onClick={() => setInProp(!inProp)}>Click to Enter</button>
    </div>
  )
}
