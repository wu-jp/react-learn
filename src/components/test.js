import React, { Component } from 'react'

export default class A extends Component {
    state = {
        n: 100,
    }
    constructor(props) {
        super(props)

        this.timer = setInterval(() => {
            this.setState({
                n: this.state.n - 1,
            })
            if (this.state.n === 0) {
                clearInterval(this.timer)
            }
        }, 1000)
    }
    render() {
        return (
            <div>
                <h1>A组件：{this.state.n}</h1>
                <B n={this.state.n} />
            </div>
        )
    }
}

function B(props) {
    return (
        <div>
            <h2>B组件：{props.n}</h2>

            <C n={props.n} />
        </div>
    )
}

function C(props) {
    return <h3>C组件：{props.n}</h3>
}
