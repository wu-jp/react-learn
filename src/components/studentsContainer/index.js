import React, { useState, useEffect } from "react"
import { useStudents } from "../../myHooks/useStudents"
import AllStudentsList from "../allStudentsList"
import StudentsList from "../studentsList"
import Page from "../page"

/**
 * 需要做的是
 * 1. 获取学生数据
 * 2. 渲染学生列表
 * 3. 设置分页
 * @returns
 */
export default function StudentsContainer() {
  const [page, setPage] = useState(1) //当前页码
  const [limit, setLimit] = useState(10) //每页的数量
  const { students, count } = useStudents(page, limit)

  const changePage = function (num) {
    setPage(num)
  }

  return (
    <div>
      <StudentsList students={students} />
      <Page count={count} page={page} limit={limit} changePage={changePage} />
      <AllStudentsList />
    </div>
  )
}
