import React, { useState, useEffect } from "react"
import StudentsList from "../studentsList"
import Page from "../page"

import { getStudentList } from "../../services/student"

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
  const [count, setCount] = useState(0) //总数量
  const [students, setStudents] = useState([]) //当前页码的学生列表

  useEffect(() => {
    // effect
    ;(async function () {
      let res = await getStudentList(page, limit)
      setCount(res.cont)
      setStudents(res.findByPage)
    })()

    return () => {
      // cleanup
    }
  }, [page, limit])

  const changePage = function (num) {
    setPage(num)
  }

  return (
    <div>
      <StudentsList students={students} />
      <Page count={count} page={page} limit={limit} changePage={changePage} />
    </div>
  )
}
