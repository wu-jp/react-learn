import React from "react"

export default function StudentsList({ students }) {
  const list = students.map(item => (
    <li key={item.id}>
      姓名：{item.name} 性别：{item.sex === 0 ? "女" : "男"}
    </li>
  ))
  return <ul>{list}</ul>
}
