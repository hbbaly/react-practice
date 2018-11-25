import React from 'react'
import {Route,Redirect} from 'react-router-dom'
export default class Protected extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log(this.props,'protext')
  }
  
  render(){
    const Component = this.props.Component
    if(this.props.loginState){
      return(
        <Component />
      )
    }else{
      return(
        (
          <Redirect 
            to={{
              pathname: "/login",
              state: { from: this.props.location }
            }}
            siginIn = {this.props.siginIn}
          />
        )
      )
    }
  }
}