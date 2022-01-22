import React from 'react'
import './App.css'

// 动画组件（基于react-transition-group第三方库封装）
// import MyTransition from "./components/MyTransition";
// import MyCSSTransition from "./components/MyCSSTransition"
// import MySwitchTransition from "./components/MySwitchTransition"
import MyTransitionGroup from "./components/MyTransitionGroup"

function App(){
    return <div className='App'>
        <MyTransitionGroup />
    </div>
}

export default App