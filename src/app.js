import React from 'react';
import Todo from './components/TodoListView'
import ChildrenView from './components/ChildrenViewList'
import Click from './components/ClickView'
import Toggle from './components/ToggleView'
import LoginStatus from './components/LoginStatus'
import Loop from './components/LoopVIew'
import Temperature from './components/TemperatureInputView'
import SignUp from './components/fancy/signUp'
export default class App extends React.Component{
    constructor(){
        super()
        this.state = {passValue:'hbb'}
        this.passTofa = this.passTofa.bind(this)
    }
    passTofa(val){
        this.setState({
            passValue:val
        })
    }
    render(){
        const posts = [
            {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
            {id: 2, title: 'Installation', content: 'You can install React from npm.'}
          ];
        return(
            <div>
               <Todo></Todo>
               <ChildrenView passValue={this.state.passValue} passTofa = {this.passTofa}></ChildrenView>
               <Click />
               <Toggle />
               <LoginStatus />
               <Loop posts={posts} />
               <Temperature/>
               <SignUp></SignUp>
            </div>
        )
    }
}