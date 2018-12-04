import React from 'react'
// import FilterLink from './filterLink'
// import Footer from './footer'
// import AddTodo from './addTodo'
// import VisibilityTodoList from './visibilityTodoList'
import {createStore} from 'redux'
import reducer from '../store/reducers/index'
const store = createStore(reducer)
class App extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        store.dispatch({type:'ADD'})
        console.log(store.getState(),2)
        store.dispatch({type:'ADD'})
        console.log(store.getState(),3)
        store.dispatch({type:'DESC'})
        console.log(store.getState(),4)
    }
    handleAdd(){
        store.dispatch({type:'ADD'})
        console.log(store.getState(),'add')
    }
    handleDesc(){
        store.dispatch({type:'DESC'})
        console.log(store.getState(),'desc')
    }
    render(){
        return(
            <div>
                <button onClick={()=>this.handleAdd()}>
                    加
                </button>
                <button onClick={()=>this.handleDesc()}>
                    减
                </button>
                {/* <AddTodo />
                <VisibilityTodoList />
                <Footer /> */}
            </div>
        )
    }
}
export default App   