import React, { Component } from "react"
import TaskList from "./TaskList"
import AddTask from "./AddTask"

export default class TaskContainer extends Component {
  state = {
    tasks: [],
  }

  componentDidMount() {
    console.log("TaskContainer mount")
    const tempArr = []
    for (let i = 0; i < 10; i++) {
      tempArr.push({
        name: `任务${i}`,
        isFinish: Math.random() > 0.5,
      })
    }
    this.setState({
      tasks: tempArr,
    })
  }

  handleAdd = value => {
    this.setState({
      tasks: [...this.state.tasks, value],
    })
  }

  render() {
    return (
      <div>
        <AddTask addTask={this.handleAdd} />
        <TaskList tasks={this.state.tasks} />
      </div>
    )
  }
}
