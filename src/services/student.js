const url = `https://open.duyiedu.com`
// const appkey = "wuyi_1550824199796"
const appkey = "demo13_1545210570249"

export async function getStudentList(page = 1, limit = 10) {
  return await fetch(`${url}/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
    .then(res => res.json())
    .then(res => res.data)
}
