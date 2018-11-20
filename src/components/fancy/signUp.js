import React from 'react'
import Dialog from './dialog'
export default class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state = {login:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
    }
    handleChange(e) {
        this.setState({login: e.target.value});
    }
      
    handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
    }
    render(){
        return(
            <div className='signUp'>
                <Dialog title="Mars Exploration Program" msg="How should we refer to you?">
                    <input value={this.state.login} onChange={this.handleChange} />
                    <button onClick = {this.handleSignUp}>sign me up</button>
                </Dialog>
            </div>
        )
    }
}