import React from 'react'
export default class HSL extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div class="item" style={{background:`hsl(${this.props.match.params.h},${this.props.match.params.s}%,${this.props.match.params.l}%)`}}>
        hsl({this.props.match.params.h},{this.props.match.params.s},{this.props.match.params.l})
      </div>
    )
  }
}