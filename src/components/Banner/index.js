import React from "react"
import PropTypes from "prop-types"
import "./index.css"

import Box from "./box" //显示图片的组件
import Nav from "./nav" //显示下方小点的组件
import Switch from "./switch" //显示左右切换图片组件

// 轮播图需要的内容
// 1.组件：图片容器组件、下标提示切换组件、左右切换组件
// 2.逻辑：自动轮播，点击左右按钮切换，点击下方标点切换
// 3.父组件提供的数据：图片、宽高、自动轮播时间间隔、轮播动画时间

export default class Banner extends React.Component {
  // 定义默认静态属性defaultProps
  static defaultProps = {
    width: 520,
    height: 280,
    imgSrcs: [],
    autoDuration: 3000,
    duration: 500,
  }

  static propTypes = {
    width: PropTypes.number.isRequired, //容器宽度
    height: PropTypes.number.isRequired, //容器高度
    imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired, //图片路径
    autoDuration: PropTypes.number.isRequired, //自动切换时间
    duration: PropTypes.number.isRequired, //一次动画所需时间
  }
  state = {
    curIndex: 0, //当前显示第几张图片
  }

  // 自动轮播的定时器
  timer = null

  // 自动切换
  autoSwitch() {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      let cur = this.state.curIndex
      cur = (cur + 1) % this.props.imgSrcs.length
      this.handelSwitch(cur)
    }, this.props.autoDuration)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  componentDidMount() {
    this.autoSwitch()
  }

  // 创建图片组件ref，使得可以访问该组件的方法
  imgContainerRef = el => {
    this.ImgContainer = el
  }

  // 触发切换功能
  handelSwitch = index => {
    this.setState({
      curIndex: index,
    })
    this.ImgContainer.switchTo(index)
  }

  // 左右切换
  changeSwitch = type => {
    let cur = this.state.curIndex
    if (type === "left") {
      cur--
      if (cur < 0) {
        cur = this.props.imgSrcs.length - 1
      }
    } else {
      cur++
      if (cur > this.props.imgSrcs.length - 1) {
        cur = 0
      }
    }
    this.handelSwitch(cur)
  }

  render() {
    return (
      <div
        className="banner-container"
        style={{
          height: this.props.height,
          width: this.props.width,
        }}
        onMouseEnter={() => {
          clearInterval(this.timer)
        }}
        onMouseLeave={() => {
          this.autoSwitch()
        }}
      >
        <Box
          ref={this.imgContainerRef}
          imgSrcs={this.props.imgSrcs}
          width={this.props.width}
          height={this.props.height}
          duration={this.props.duration}
        ></Box>
        <Switch onChange={this.changeSwitch}></Switch>
        <Nav onChange={this.handelSwitch} curIndex={this.state.curIndex} total={this.props.imgSrcs.length}></Nav>
      </div>
    )
  }
}
