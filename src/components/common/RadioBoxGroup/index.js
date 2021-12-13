import React, { Component } from "react"
import types from "../../../utils/commonTypes"
import PropTypes from "prop-types"
import withDataGroup from "../hoc/withDataGroup"

/**
 * 一组单选框
 */
class Radio extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    info: types.singleData,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  }

  handleChange = e => {
    this.props.onChange && this.props.onChange(e.target.value, this.props.name, e)
  }

  getRadios() {
    return (
      <label>
        <input
          type="radio"
          name={this.props.name}
          value={this.props.info.value}
          checked={this.props.value === this.props.info.value}
          onChange={this.handleChange}
        />
        {this.props.info.text}
      </label>
    )
  }

  render() {
    const bs = this.getRadios()
    return <div>{bs}</div>
  }
}

export default withDataGroup(Radio)
