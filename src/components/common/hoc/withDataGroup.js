import React from "react"

import types from "../../../utils/commonTypes"

export default function withDataGroup(Comp) {
  return class DataGroupWrapper extends React.Component {
    static defaultProps = {
      datas: [],
    }

    static propTypes = {
      datas: types.groupDatas,
    }
    render() {
      const comps = this.props.datas.map(item => <Comp key={item.value} info={item} {...this.props}></Comp>)
      return <>{comps}</>
    }
  }
}
