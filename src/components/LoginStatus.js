import React from 'react'
import LoginIn from './loginInView'
import LoginOut from './loginOutView'
export default class LoginStatus extends React.Component{
    constructor(props){
        super(props)
        this.loginIn = this.loginIn.bind(this)
        this.loginOut = this.loginOut.bind(this)
        this.state={isLogin:false,loginText:'请登录'}

    }
    loginIn(val,e){
        console.log(val,'=================')
        this.setState({
            isLogin:true,
            loginText:'欢迎回来'
        })
    }
    loginOut(){
        this.setState({
            isLogin:false,
            loginText:'请登录'
        })
    }
   
    render(){
        const isLogin = this.state.isLogin
        let loginBtn = null
        if(!isLogin){
            loginBtn = <LoginIn onClick={this.loginIn} />
        }else{
            loginBtn = <LoginOut onClick={this.loginOut} />
        } 
        return(
            <div>
                <h3>{this.state.loginText}</h3>
                {loginBtn}
            </div>
        )
    }
}