import React from "react"
import { Consumer } from "./FormContext"

export default function FormButton() {
  return (
    <div>
      <Consumer>
        {res => {
          return (
            <button
              onClick={() => {
                res.submitFormData()
              }}
            >
              提交
            </button>
          )
        }}
      </Consumer>
    </div>
  )
}
