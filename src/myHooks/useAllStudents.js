import { useState, useEffect } from "react"
import { getAllStudent } from "../services/student"

/**
 * 页面首次渲染完成，获取所有学生数据
 * @returns 学生数据 Array
 */
export function useAllStudents() {
  const [students, setStudents] = useState([])
  useEffect(() => {
    getAllStudent().then(res => {
      setStudents(res)
    })
  }, [])
  return students
}
