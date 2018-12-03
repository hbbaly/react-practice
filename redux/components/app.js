import React from 'react'
import FilterLink from './filterLink'
import Footer from './footer'
import AddTodo from './addTodo'
import VisibilityTodoList from './visibilityTodoList'
class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <AddTodo />
                <VisibilityTodoList />
                <Footer />
            </div>
        )
    }
}
export default App   