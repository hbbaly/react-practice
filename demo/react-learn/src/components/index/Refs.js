import React from 'react'
export default class Refs extends React.Component{
  constructor(){
    super()
    // 使用 React.createRef() 创建 refs，通过 ref 属性来获得 React 元素
    this.ref = React.createRef()
  }
  componentDidMount(){
    // 可以使用 ref 中的 current 属性对节点的引用进行访问。
    console.log(this.ref.current)
    // 获取dom节点
    console.log(this.inputRef)
    // 渲染之后让input自动聚焦
    this.inputRef.focus()
  }
  render(){
    return(
      <div className='refs'>
        <input typ='text' placeholder='自动聚焦案例' ref={input => this.inputRef = input}></input>
        <p ref = {this.ref}>获取dom</p>
      </div>
    )
  }
}