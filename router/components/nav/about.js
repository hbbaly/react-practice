import React from 'react'

export default class About extends React.Component{
  constructor(props){
    super(props)
    this.handlePath =this.handlePath.bind(this)
  }
  componentDidMount(){
    console.log(this.props )
  }
  handlePath(){
    this.props.history.push('/match')
  }
  render(){
    return(
      <div>
        <h1>ABOUT</h1>
        <div onClick={this.handlePath}>跳转</div>
      </div>
    )
  }
}