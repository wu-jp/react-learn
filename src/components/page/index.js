import "./index.css"
import React from "react"
import leftImg from "../../assets/images/arrow-left.png"
import rightImg from "../../assets/images/arrow-right.png"
// import omit from "../../assets/images/omit.png"

export default function Page({ count, page, limit, changePage }) {
  let pageNumber = Math.ceil(count / limit) //页数
  let pageSpanList = []
  for (let i = 0; i < pageNumber; i++) {
    pageSpanList.push(
      <span
        className={page === i + 1 ? "target" : ""}
        key={i}
        onClick={() => {
          changePage(i + 1)
        }}
      >
        {i + 1}
      </span>
    )
  }
  return (
    <div className="pager-container">
      <span
        className="img-box"
        onClick={() => {
          page > 1 && changePage(page - 1)
        }}
      >
        <img className="left-img" src={leftImg} alt="" />
      </span>
      {pageSpanList}

      <span
        className="img-box"
        onClick={() => {
          page < pageNumber && changePage(page + 1)
        }}
      >
        <img className="right-img" src={rightImg} alt="" />
      </span>
    </div>
  )
}
