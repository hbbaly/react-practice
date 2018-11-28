import React from 'react'
export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.handlePath =this.handlePath.bind(this)

  }
  componentDidMount(){
    console.log(this.props)
  }
  handlePath(){
    this.props.history.push('/topics')    // 这个使用只能跳转在同一父组件下的组件 比如home 只能跳转/about  ，/topics  ,/match
  }
  render(){
    return(
      <div>
<h1 onClick={this.handlePath}>HOME</h1>
      <Match></Match>
      </div>
      
    )
  }
}