import React from 'react'
export default class RGB extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div class="item" style={{background:`rgb(${this.props.match.params.r},${this.props.match.params.g},${this.props.match.params.b})`}}>
        hsl(${this.props.match.params.r},${this.props.match.params.g},${this.props.match.params.b})
      </div>
    )
  }
}