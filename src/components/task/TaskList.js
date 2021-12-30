import React, { PureComponent } from "react"
import Task from "./Task"
import PropTypes from "prop-types"

export default class TaskList extends PureComponent {
  static propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        isFinish: PropTypes.bool.isRequired,
      })
    ),
  }
  render() {
    const taskList = this.props.tasks.map(item => <Task key={item.name} {...item}></Task>)
    return <div>{taskList}</div>
  }
}
