import React from 'react'
import TodoView from '../components/setState/index'
export default class Todo extends React.Component{
  render(){
    return(
      <div className="page page-todo">
        <TodoView />
      </div>
    )
  }
}