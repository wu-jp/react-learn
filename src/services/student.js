const key = 'wuyi_1550824199796'

/**
 * 获取所有学生
 */

export async function getAllStudents() {
    return await fetch('http://open.duyiedu.com/api/student/findAll?appkey=' + key)
        .then(resp => resp.json())
        .then(resp => resp.data)
}
