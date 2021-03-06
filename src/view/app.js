import React from 'react';
import {BrowserRouter as Router , Route,Link} from 'react-router-dom'
import Todo from './components/TodoListView'
import ChildrenView from './components/ChildrenViewList'
import Click from './components/ClickView'
import Toggle from './components/ToggleView'
import LoginStatus from './components/LoginStatus'
import Loop from './components/LoopVIew'
import FocusInput from './components/ref/focusInput'
import SignUp from './/components/fancy/signUp'
import UploadFile from './components/uploadFile/uploadFile'
import ClassProperty from './components/classProperties/classProperties'
import ErrorBoundaey from './components/boundaries/ErrorBoundary'
import MouseTracker from './components/renderProps/mouseTracker'
const TodoList  = ()=> <h1>TODO LIST</h1>
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
          <Router>
            <div>
               <Todo></Todo>
               <ChildrenView passValue={this.state.passValue} passTofa = {this.passTofa}></ChildrenView>
               <Click />
               <Toggle />
               <LoginStatus />
               <Loop posts={posts} />
               {/* <SignUp /> */}
               <FocusInput />
               <UploadFile ></UploadFile>
              
               <ErrorBoundaey>
               <ClassProperty />
               </ErrorBoundaey>
               <MouseTracker></MouseTracker>
            </div>
          </Router>
        )
    }
}