import React from 'react'

export default class LifeCycleView extends React.Component {
  constructor () {
    super ()
    this.state = {
    }
  }
  // 组件挂载前调用 比render执行的早
  componentWillMount () {
    console.log('componentWillMount')
  }
  // 组件挂载后调用 比render执行的晚
  componentDidMount () {
    console.log('componentDidMount')
  }
  // props 发生改变调用  在组件从父组件接受参数的时候，并且这个组件已经存在父组件中，
  // 父组件render重新执行的时候都会触发componentWillReceiveProps执行，如果是第一次存在与父组件中是不会执行的 。
  componentWillReceiveProps (nextProps, prevProps) {
    console.log('componentWillReceiveProps', nextProps, prevProps)
  }
  // return true组件会重新渲染，false阻止重新渲染
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    if(this.props.name){
      return true
    }else{
      return false
    }
  }

  componentWillUpdate () {
    console.log('componentWillUpdate')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  // 当这个组件在页面中即将被剔除
  componentWillUnmout () {
    console.log('componentWillUnmout')
  }
  render () {
    console.log('render')
    return (
      <div>
        <h2>LifeCycle</h2>
      </div>
    )
  }
}