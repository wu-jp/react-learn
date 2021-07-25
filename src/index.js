import React from 'react'
import ReactDOM from 'react-dom'
import Comp from './Comp'

ReactDOM.render(
    <Comp>
        <h1>这里是父组件传递的组件内容用</h1>
    </Comp>,
    document.getElementById('root')
)
