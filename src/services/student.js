const url = `https://open.duyiedu.com`
// const appkey = "wuyi_1550824199796"
const appkey = "demo13_1545210570249"

export async function getStudentList(page = 1, limit = 10) {
  return await fetch(`${url}/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
    .then(resp => resp.json())
    .then(resp => resp.data)
}

export async function getAllStudent() {
  return await fetch(`${url}/api/student/findAll?appkey=${appkey}`)
    .then(resp => resp.json())
    .then(resp => resp.data)
}

/**
 * 查询学生
 * 如果传递了key属性（key有值），则按照关键字和性别进行搜索
 * 如果key没有值，则对所有学生进行分页
 * @param {*} param0
 */
export async function searchStudents({ page = 1, limit = 10, key = "", sex = -1 }) {
  if (key) {
    // 搜素
    const resp = await fetch(
      `${url}/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limit}&search=${key}&sex=${sex}`
    )
      .then(resp => resp.json())
      .then(resp => resp.data)
    resp.data = resp.searchList
    delete resp.searchList
    return resp
  } else {
    // 全局
    const resp = await getStudentList(page, limit)
    resp.data = resp.findByPage
    delete resp.findByPage
    return resp
  }
}
