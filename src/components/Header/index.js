import React from "react"
import { Link } from "react-router-dom"
import "./index.css"
export default function Header() {
  return (
    <div className="header-container">
      <div className="left">
        <Link to="/">wuyioo学生管理系统</Link>
      </div>
      <div className="right">
        <Link to="/login">登录</Link>
      </div>
    </div>
  )
}
