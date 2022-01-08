import { useState, useEffect } from "react"
import { getStudentList } from "../services/student"

export function useStudents(page = 1, limit = 10) {
  const [students, setStudents] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    getStudentList(page, limit).then(res => {
      setStudents(res.findByPage)
      setCount(res.cont)
    })
  }, [page, limit])

  return {
    students,
    count,
  }
}
