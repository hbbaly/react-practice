import React from 'react'
import {BrowserRouter as Router, Route,Link,Redirect,withRouter} from 'react-router-dom'
import Login from './login'
import LoginState from './loginState'
import Public from './public'
import Protected from './protected'
import Protect from './protect'
export default class RedirectUrl extends React.Component{
  constructor(props){
    super(props)
    this.siginIn = this.siginIn.bind(this)
    this.state = {loginState:true}    

  }
  componentDidMount(){
    console.log(this.props )
  }
  siginIn(val){
    console.log(val,'login')
  }
  render(){
    return(
      <div class="redirect">
        <Router>
          <div>
            <LoginState loginState={this.state.loginState} siginIn = {this.siginIn}></LoginState>
            <div class="public">
              <Link to="/public">public</Link>
            </div>
            <div class="protect">
              <Link to='/protect'>protected</Link>
            </div>
            <Route path="/public" component = {Public}></Route>
            <Route path="/login" component={Login} siginIn = {this.siginIn} ></Route>
            {/* <Protected path="/protect" component={Protect}></Protected> */}
            <Route path="/protect" component={Protected} Component = {Protect} loginState={this.state.loginState}></Route>
          </div>
        </Router>
      </div>
    )
  }
}