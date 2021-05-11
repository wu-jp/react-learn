import React from 'react'
import ReactDOM from 'react-dom'
// import Ball from './components/Ball'
import BallList from './components/BallList'

ReactDOM.render(
    <React.StrictMode>
        {/* <Ball bg="pink" left={100} top={100} xSpeed={100} ySpeed={200} /> */}
        <BallList />
    </React.StrictMode>,
    document.getElementById('root')
)
