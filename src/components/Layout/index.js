import React from "react"
import PropTypes from "prop-types"
import "./index.css"

export default function Layout(props) {
  return (
    <div className="wrapper">
      <header className="header">{props.header}</header>
      <main className="main">
        <aside className="aside">{props.aside}</aside>
        <div className="middle">{props.children}</div>
      </main>
    </div>
  )
}

Layout.propTypes = {
  header: PropTypes.element,
  aside: PropTypes.element,
  children: PropTypes.node,
}
