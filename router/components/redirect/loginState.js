import React from 'react'
export default class LoginState extends React.Component{
  constructor(props){
    super(props)
    this.state = {state:'You are not logged in.'}
  }
  componentDidMount(){
    console.log(this.props,'hbb')
  }
  componentWillReceiveProps(){
    if(this.props.loginState){
      this.setState = (prevState=>({
        state :'Welcome!'
      }))
    }
  }
  render(){
    const state = this.props.loginState?<button onClick={this.props.siginIn.bind(this,'hbb')}>'Sigin out'</button>:''
    return(
      <div className="loginState">
       {this.state.state}{state}
      </div>
    )
  }
}