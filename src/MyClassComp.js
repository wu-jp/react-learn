import React, { Component } from 'react'

export default class MyClassComp extends Component {
    constructor(props) {
        super(props) // this.props = props
    }
    /**
     * 该方法必须返回react元素
     */
    render() {
        if (this.props.obj) {
            return (
                <div>
                    <p>name: {this.props.obj.name}</p>
                    <p>age: {this.props.obj.age}</p>
                </div>
            )
        } else if (this.props.ui) {
            return this.props.ui
        }
        return <h1>类组件内容，目前的数字：{this.props.number}</h1>
    }
}
