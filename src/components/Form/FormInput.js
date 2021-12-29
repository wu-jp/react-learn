import React, { Component } from "react"
import ctx from "./FormContext"
import PropTypes from "prop-types"

export default class FormInput extends Component {
  // 使用上下文
  static contextType = ctx

  // 属性校验
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }

  render() {
    return (
      <input
        onChange={e => {
          this.context.changeFormData(this.props.name, e.target.value)
        }}
        value={this.context.formData[this.props.name] || ""}
        type={this.props.type || "text"}
      />
    )
  }
}
