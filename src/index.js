import React from 'react'
import ReactDOM from 'react-dom'
import MyFuncComp from './MyFuncComp'
import MyClassComp from './MyClassComp'

ReactDOM.render(
    <div>
        <MyFuncComp number={4} />
        <MyFuncComp number="5" />
        <MyClassComp number="6" ui={<h2>这是父组件传的React组件</h2>} />
        <MyClassComp
            number={7}
            obj={{
                name: 'wuyi',
                age: 18,
            }}
        />
    </div>,
    document.getElementById('root')
)
