import React from 'react'
export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.login = this.login.bind(this)
  }
  componentDidMount(){
    console.log(this.props,'login')
  }
  login(){
    this.props.siginIn('hbb')
    this.props.history.push('/')
  }
  render(){
    return(
      <div class="login">
        <h3>You must log in to view the page at /protected</h3>
        <button onClick = {this.login}>Login in</button>
      </div>
    )
  }
}