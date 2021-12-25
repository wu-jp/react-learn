import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Box extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired, //容器宽度
    height: PropTypes.number.isRequired, //容器高度
    imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired, //图片路径
    duration: PropTypes.number.isRequired, //一次动画所需时间
  }

  containerRef = el => {
    this.div = el
  }

  tick = 16 //计时器的间隔时间
  timer = null //计时器序号

  switchTo = index => {
    if (index < 0) {
      index = 0
    } else if (index > this.props.imgSrcs.length - 1) {
      index = this.props.imgSrcs.length - 1
    }

    // 当前运动的次数
    let curTimes = 0
    // 计算最终目标的marginLeft值
    let targetLeft = -index * this.props.width

    // 计算当前marginLeft值
    let curLeft = parseFloat(window.getComputedStyle(this.div).marginLeft)

    // 需要运动的次数
    let times = Math.ceil(this.props.duration / this.tick)

    // 计算每16毫秒运动的距离
    const totalDis = targetLeft - curLeft
    let dis = totalDis / times

    clearInterval(this.timer)
    this.timer = setInterval(() => {
      curTimes++
      curLeft += dis
      this.div.style.marginLeft = curLeft + "px"
      if (curTimes === times) {
        //停止运动
        this.div.style.marginLeft = targetLeft + "px"
        clearInterval(this.timer)
      }
    }, this.tick)
  }

  render() {
    const imgs = this.props.imgSrcs.map((src, i) => (
      <img
        src={src}
        key={i}
        alt=""
        style={{
          width: this.props.width,
          height: this.props.height,
          float: "left",
        }}
      ></img>
    ))
    return (
      <div
        ref={this.containerRef}
        style={{
          width: this.props.imgSrcs.length * this.props.width,
          height: this.props.height,
        }}
      >
        {imgs}
      </div>
    )
  }
}
