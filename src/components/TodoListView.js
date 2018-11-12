/**
 * @author：hbbaly
 * @Date: 2018-11-12
 * @desc：官网的todo联系例子
*/
import React from 'react';
export default class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state = {todoList:[], text: '' };
        this.inputTodo = this.inputTodo.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }
    inputTodo(e){
        this.setState ({text:e.target.value})
    }
    addTodo(e){
        e.preventDefault();
        if(!this.state.text.length) return
        const newItem = {
            text:this.state.text,
            id:Date.now()
        }
        this.setState(prevState=>({
            todoList:prevState.todoList.concat(newItem),
            text:''
        }))
    }
    render(){
        return(
            <div>
                <h3>TODO</h3>
                <ul>
                    {this.state.todoList.map(item =>(
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
                <input onChange = {this.inputTodo} value={this.state.text}/>
                <button onClick={this.addTodo}>Add</button>
            </div>
        )
    }
}