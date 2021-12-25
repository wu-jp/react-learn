import React, { Component } from "react"

import Banner from "./Banner"
import src1 from "../images/wallhaven-9mogy1.jpg"
import src2 from "../images/wallhaven-q238zr.jpg"
import src3 from "../images/wallhaven-x892zz.png"

export default class Test extends Component {
  render() {
    return <Banner imgSrcs={[src1, src2, src3]} duration={500} autoDuration={3000}></Banner>
  }
}
