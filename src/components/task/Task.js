import React from "react"
import PropTypes from "prop-types"
import "./task.css"

Task.propTypes = {
  name: PropTypes.string.isRequired,
  isFinish: PropTypes.bool.isRequired,
}

function Task(props) {
  return (
    <div>
      <li className={props.isFinish ? "achieve" : ""}>{props.name}</li>
    </div>
  )
}

// 纯组件
export default React.memo(Task)
