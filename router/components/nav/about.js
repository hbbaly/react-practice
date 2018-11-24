import React from 'react'
export default class About extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log(this.props )
  }
  render(){
    return(
      <h1>ABOUT</h1>
    )
  }
}