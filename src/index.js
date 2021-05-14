import React from 'react'
import ReactDOM from 'react-dom'

import TickControl from './components/TickControl'

function handleClick() {
    console.log('点击了')
}

ReactDOM.render(
    <React.StrictMode>
        {/* <h1>hello react!</h1>
        <button onClick={handleClick}>点击了</button> */}
        <TickControl />
    </React.StrictMode>,
    document.getElementById('root')
)
