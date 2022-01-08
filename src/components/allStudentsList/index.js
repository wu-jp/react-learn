import React from "react"
// myHooks
import { useAllStudents } from "../../myHooks/useAllStudents"

export default function AllStudentsList() {
  // 所有学生列表
  const allStudents = useAllStudents()
  const allList = allStudents.map(item => <li key={item.id}>{item.name}</li>)
  return (
    <div>
      <p>所有学生数量：{allStudents.length}</p>
      <ul>{allList}</ul>
    </div>
  )
}
