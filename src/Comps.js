import React, { Component } from 'react'

export default class Comps extends Component {
    state = {
        n: 0,
    }
    handelClick = () => {
        // this.setState(
        //     {
        //         n: this.state.n + 1,
        //     },
        //     () => {
        //         console.log('state更新完成', this.state.n)
        //         this.setState(
        //             {
        //                 n: this.state.n + 1,
        //             },
        //             () => {
        //                 console.log('state更新完成', this.state.n)
        //                 this.setState(
        //                     {
        //                         n: this.state.n + 1,
        //                     },
        //                     () => {
        //                         console.log('state更新完成', this.state.n)
        //                     }
        //                 )
        //             }
        //         )
        //     }
        // )

        this.setState(
            cur => {
                //参数cur表示当前的状态
                //该函数的返回结果，会混合（覆盖）掉之前的状态
                //该函数是异步执行
                return {
                    n: cur.n + 1,
                }
            },
            () => {
                //所有状态全部更新完成，并且重新渲染后执行
                console.log('state更新完成', this.state.n)
            }
        )

        this.setState(cur => {
            return {
                n: cur.n + 1,
            }
        })
        this.setState(cur => {
            return {
                n: cur.n + 1,
            }
        })
    }
    render() {
        console.log('render')
        return (
            <div>
                <h1>{this.state.n}</h1>
                <p>
                    <button onClick={this.handelClick}>+</button>
                </p>
            </div>
        )
    }
}
