import React from 'react'
export default class Regex extends React.Component{
  constructor(props){
    super(props)
  }
  componentWillReceiveProps(){
    console.log(this.props.match)
  }
  render(){
    return(
      <div>
        <h3> only asc/desc are allowed :{this.props.match.params.direction}</h3>
      </div>
    )
  }
}