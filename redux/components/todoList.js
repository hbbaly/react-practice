import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'
class TodoList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ul>
                {this.props.todos.map(todo=>(
                    <Todo key={todo.id} {...todo} onClick={()=>toggleTodo(todo.id)}></Todo>
                ))}
            </ul>
        )
    }
}
TodoList.propTypes = {
    todos:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            completed:PropTypes.bool.isRequired,
            text:PropTypes.string.isRequired
        }).isRequired,
        toggleTodo:PropTypes.func.isRequired
    )
}
export default TodoList