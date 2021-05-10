import React from 'react'
import ReactDOM from 'react-dom'
import Student from './components/Student'
import StudentList from './components/StudentList'

const appkey = 'wuyi_1550824199796'

async function fetchAllStudents() {
    const stus = await fetch('http://open.duyiedu.com/api/student/findAll?appkey=' + appkey)
        .then(res => res.json())
        .then(res => res.data)
    return stus
}

async function render() {
    const stus = await fetchAllStudents()
    ReactDOM.render(
        <React.StrictMode>
            <h1>hello react</h1>
            {/* <Student {...s}></Student> */}
            <StudentList stus={stus}></StudentList>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
render()

let s = {
    name: 'wuyi',
    birth: '1990',
    sex: 1,
}

let params = {
    appkey,
    sNo: '1003',
    name: '吴佳鹏3',
    sex: 0,
    birth: 1996,
    phone: '13064157803',
    address: '江西九江',
    email: '1501453804@qq.com',
}
let GET_URL = 'http://open.duyiedu.com/api/student/addStudent'
// get(GET_URL, params)
function get(url, params) {
    if (params) {
        let paramsArray = []
        //拼接参数
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    //fetch请求
    fetch(url, {
        method: 'GET',
    })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            alert(error)
        })
}
