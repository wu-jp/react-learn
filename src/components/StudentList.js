import React, { Component } from 'react'
import Student from './Student'

export default class StudentList extends Component {
    render() {
        // props.stus ，传递的是学生数组
        const students = this.props.stus.map(item => <Student key={item.id} {...item}></Student>)
        return <ul>{students}</ul>
    }
}
