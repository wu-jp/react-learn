import React, { Component } from "react"
import types from "../../../utils/commonTypes"
import PropTypes from "prop-types"
import withDataGroup from "../hoc/withDataGroup"
/**
 * 一组单选框
 */
class Option extends Component {
  static propTypes = {
    info: types.singleData,
  }

  render() {
    return <option value={this.props.info.value}>{this.props.info.text}</option>
  }
}

const OptGroup = withDataGroup(Option)

export default class Select extends Component {
  static propTypes = {
    datas: types.groupDatas,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  }

  handleChange = e => {
    this.props.onChange && this.props.onChange(e.target.value, this.props.name, e)
  }

  getSelect() {
    return (
      <select name={this.props.name} value={this.props.value} onChange={this.handleChange}>
        <OptGroup datas={this.props.datas}></OptGroup>
      </select>
    )
  }

  render() {
    const bs = this.getSelect()
    return <>{bs}</>
  }
}
