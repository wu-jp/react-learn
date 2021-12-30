import React, { PureComponent } from "react"

export default class AddTask extends PureComponent {
  state = {
    name: "",
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => {
            this.setState({
              name: e.target.value,
            })
          }}
        />
        <button
          onClick={() => {
            this.props.addTask({ name: this.state.name, isFinish: false })
          }}
        >
          添加任务
        </button>
      </div>
    )
  }
}
