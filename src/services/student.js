const url = `https://open.duyiedu.com`
const appkey = "wuyi_1550824199796"

/**
 * 获取所有学生
 */
export async function getAllStudents() {
  return await fetch(url + "/api/student/findAll?appkey=" + appkey)
    .then(resp => resp.json())
    .then(resp => resp.data)
}

export async function getStudents(page = 1, limit = 10) {
  return await fetch(url + `/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
    .then(resp => resp.json())
    .then(resp => resp.data)
}
