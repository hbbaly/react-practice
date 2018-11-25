import React from 'react'
export default class Protect extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div class="login">
        <h3>protected</h3>
        {/* <button onClick={this.props.handleLogin.bind(this,true)}>Login in</button> */}
      </div>
    )
  }
}