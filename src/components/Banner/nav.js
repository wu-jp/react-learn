import React, { Component } from "react"
import PropTypes from "prop-types"
import "./nav.css"

export default class Nav extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
    curIndex: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  render() {
    let point = []
    for (let i = 0; i < this.props.total; i++) {
      point.push(
        <span
          onClick={() => {
            this.props.onChange(i)
          }}
          className={`point ${i === this.props.curIndex ? "active" : null}`}
          key={i}
        ></span>
      )
    }
    return <div className="pointBox">{point}</div>
  }
}
