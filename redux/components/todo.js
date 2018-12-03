import React from 'react'
import PropTypes from 'prop-types'
class Todo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const props = this.props
        return(
            <li onClick = {props.handleClick} style={{textDecoration:props.completed?'line-through':'none'}}>
                {props.text}
            </li>
        )
    }
}
Todo.PropTypes = {
    handleClick:PropTypes.func.isRequired,
    completed:PropTypes.bool.isRequired,
    text:PropTypes.string.isRequired
}
export default Todo