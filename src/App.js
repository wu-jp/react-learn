import React, { Component } from 'react'
import FormTest from './components/FormTest'

export default class App extends Component {
    state = {
        val: 123,
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.val}
                    onChange={e => {
                        this.setState({
                            val: e.target.value,
                        })
                    }}
                />
                <button
                    onClick={() => {
                        console.log(this.state.val)
                    }}
                >
                    获取文本框的值
                </button>

                <FormTest />
            </div>
        )
    }
}
