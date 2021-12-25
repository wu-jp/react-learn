import React, { Component } from "react"
import "./switch.css"
import PropTypes from "prop-types"

export default class Switch extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  }
  render() {
    return (
      <>
        <span
          onClick={() => {
            this.props.onChange && this.props.onChange("left")
          }}
          className="left"
        >
          &lt;
        </span>
        <span
          onClick={() => {
            this.props.onChange && this.props.onChange("right")
          }}
          className="right"
        >
          &gt;
        </span>
      </>
    )
  }
}
