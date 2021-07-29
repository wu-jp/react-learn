import React, { Component } from 'react'
// import Test from './components/common/CheckBoxGroup/Test'
// import Test from './components/common/RadioBoxGroup/Test'
import Test from './components/common/Select/Test'

export default class App extends Component {
    state = {
        val: 123,
    }
    render() {
        return (
            <div>
                <Test />
            </div>
        )
    }
}
