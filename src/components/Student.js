import React from 'react'

export default function Student(props) {
    return (
        <li>
            [name]:{props.name}
            [age]: {props.birth}
            [sex]: {props.sex === 1 ? '男' : '女'}
        </li>
    )
}
