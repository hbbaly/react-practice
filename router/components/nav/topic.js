import React from 'react'
export default class Topic extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>{this.props.match.params.topicId}</div>
    )
  }
}