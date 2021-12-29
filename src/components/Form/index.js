import React, { Component } from "react"
import { Provider } from "./FormContext"
import FormInput from "./FormInput"
import FormButton from "./FormButton"
import PropTypes from "prop-types"

export default class Form extends Component {
  static propTypes = {
    submitFormData: PropTypes.func,
  }
  state = {
    formData: {},
    changeFormData: (name, value) => {
      this.setState({
        formData: {
          ...this.state.formData,
          [name]: value,
        },
      })
    },
    submitFormData: () => {
      this.props.submitFormData && this.props.submitFormData(this.state.formData)
    },
  }
  render() {
    return (
      <div>
        <Provider value={this.state}>{this.props.children}</Provider>
      </div>
    )
  }
}

Form.FormInput = FormInput
Form.FormButton = FormButton
