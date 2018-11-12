import React from 'react';
import Todo from './components/TodoListView'
import ChildrenView from './components/ChildrenViewList'
import Click from './components/ClickView'
import Toggle from './components/ToggleView'
import LoginStatus from './components/LoginStatus'
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
        return(
            <div>
               <Todo></Todo>
               <ChildrenView passValue={this.state.passValue} passTofa = {this.passTofa}></ChildrenView>
               <Click />
               <Toggle />
               <LoginStatus />
            </div>
        )
    }
}