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