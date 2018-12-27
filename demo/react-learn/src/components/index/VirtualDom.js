import React from 'react'
import propsTypes from 'prop-types'
class VirtualDom extends React.Component{
  render(){
    // 当props，或者state发生改变，render函数就会出发，重新渲染
    // Virtual Dom 是一个js对象 把要渲染的节点生成 js对象，当props，state 发生改变时候，新老virtual dom 会发生对比，改变的部分重新渲染。

    // react 中的key属性，key必须在其兄弟节点中是唯一的，用与检查virtual dom 变化， 渲染变化key对应的dom节点，其他key值对应的节点不变，不会重新渲染。
    console.log(this.props.name)
    return(
      <div>{this.props.name}</div>
    )
  }
}
VirtualDom.propsTypes = {
  name: propsTypes.string.isRequired
}
VirtualDom.defaultProps = {
  name:'hbb'
}
export default VirtualDom