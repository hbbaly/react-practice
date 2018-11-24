import React from 'react'
export default class Child extends React.Component{
  constructor(props){
    super(props)
  }
  componentWillReceiveProps(){
    console.log(this.props.match)
  }
  render(){
    return(
      <div>{this.props.match.params.id}</div>
    )
  }
}