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

// 当 ref 属性被用于一个普通的 HTML 元素时，React.createRef() 将接收底层 DOM 元素作为它的 current 属性以创建 ref 。
// 当 ref 属性被用于一个自定义类组件时，ref 对象将接收该组件已挂载的实例作为它的 current 。
// 你不能在函数式组件上使用 ref 属性，因为它们没有实例。