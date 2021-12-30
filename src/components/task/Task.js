import React from "react"
import PropTypes from "prop-types"

Task.propTypes = {
  name: PropTypes.string.isRequired,
  isFinish: PropTypes.bool.isRequired,
}

function Task(props) {
  return (
    <div>
      <li>{props.name}</li>
    </div>
  )
}

// 纯组件
export default React.memo(Task)
