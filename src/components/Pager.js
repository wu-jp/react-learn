import React from 'react'
import './Pager.css'

/**
 * 分页组件
 * 属性：
 * 1. current: 初始页码
 * 2. total: 总数据量
 * 3. limit：页容器，每页显示的数据量
 * 4. panelNumber: 数字每页最多显示多少个
 * 5. onPageChange: 当页码改变的事件
 * @returns
 */
export default function Pager(props) {
    console.log(props)
    const pageNumber = getPageNumber(props)
    if (pageNumber === 0) {
        return null
    }
    const min = getMinNumber(props)
    const max = getMaxNumber(min, pageNumber, props)
    // const max = 10

    const number = []

    for (let i = min; i < max; i++) {
        number.push(
            <span
                key={i}
                onClick={() => {
                    toPage(i, props)
                }}
                className={i === props.current ? 'item active' : 'item'}
            >
                {i}
            </span>
        )
    }

    return (
        <>
            <span
                onClick={() => {
                    toPage(1, props)
                }}
                className={props.current === 1 ? 'item disabled' : 'item'}
            >
                首页
            </span>
            <span
                onClick={() => {
                    toPage(props.current - 1 < 1 ? 1 : props.current - 1, props)
                }}
                className={props.current - 1 ? 'item disabled' : 'item'}
            >
                上一页
            </span>
            {number}
            <span
                onClick={() => {
                    toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props)
                }}
                className={props.current === pageNumber ? 'item disabled' : 'item'}
            >
                下一页
            </span>
            <span
                onClick={() => {
                    toPage(pageNumber, props)
                }}
                className={props.current === pageNumber ? 'item disabled' : 'item'}
            >
                尾页
            </span>
            <span className="current">{props.current}</span>/<span>{pageNumber}</span>
        </>
    )
}

/**
 * 计算最小数字
 * @param {*} props
 */
function getMinNumber(props) {
    var min = props.current - Math.floor(props.panelNumber / 2)
    if (min < 1) {
        min = 1
    }
    return min
}

/**
 * 计算最大数字
 * @param {*} min
 * @param {*} pageNumber
 * @param {*} props
 */
function getMaxNumber(min, pageNumber, props) {
    var max = min + props.panelNumber - 1
    if (max > pageNumber) {
        max = pageNumber
    }
    return max
}

/**
 * 跳转到某一页
 * @param {*} target
 * @param {*} props
 */
function toPage(target, props) {
    if (props.current === target) {
        return //目标页码和当前页码相同
    }
    props.onPageChange && props.onPageChange(target)
}

/**
 * 计算总页数
 * @param {*} props
 */
function getPageNumber(props) {
    return Math.ceil(props.total / props.limit)
}
