import React from 'react'
export default class SetStateView extends React.Component{
  constructor(){
    super()
    this.state = {
      choose:'',
      arr:['first','second','third']
    }
  }
  changeItem (val) {
    // this.setState({
    //   choose:val
    // })
    // console.log(this.state.choose)
    // setState是异步函数，你在使用setState去改变某个值，他不会立刻改变，而是进入队列，某个时间点合并，一起刷新。，所以在使用setState改变某个值，立马去调用
    // 有可能值还没有变化。

    // 如何确定值发生了变化。setState有第二个参数，callback
    // this.setState({
    //   choose:val
    // }, () => {
    // console.log(this.state.choose,'choose is changed')
    // })

    // react合成事件：React并不是将click事件绑在该div的真实DOM上，而是在document处监听所有支持的事件，当事件发生并冒泡至document处时，React将事件内容封装并交由真正的处理函数运行。
    // 不要将原生事件（addEventListener）和React合成事件一起混合使用，这两个机制是不一样的。
    // 钩子函数：生命周期，回调函数
    // setState在原生事件，和setTimeout 是同步的，在合成事件和钩子函数是同步的
    setTimeout(() => {
      this.setState({
        choose:val
      })
      console.log(this.state.choose)
    });

  }
  render(){
    return(
      <div>
        {this.state.arr.map(item => (
          <p className='list' onClick={this.changeItem.bind(this,item)} key={item}>{item}</p>
        ))}
      </div>
    )
  }
}