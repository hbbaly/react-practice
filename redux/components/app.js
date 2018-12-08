import React from 'react'
import Store from '../store/index'
import creators from '../store/creators'
import TodoListUi from './todoListUi'
// import axios from 'axios'
class App extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeVal = this.handleChangeVal.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        this.state = Store.getState()    //把store中的数据赋值给组建的state
        Store.subscribe(this.handleChangeVal)  // 订阅handleChangeVal函数，当store放生改变会触发这个函数
    }
    componentDidMount(){
      Store.dispatch(creators.getVueList())
    }
    handleChange(e){
      const action = creators.getInputChangeAction(e.target.value)
      Store.dispatch(action)
    }
    handleChangeVal(){
      this.setState(Store.getState())   // 订阅函数发生改变时， 重新更新试图
    }
    handleClick(){
      /// 添加按钮
      const action = creators.getAddItem()
      Store.dispatch(action)
    }
    handleItemDelete(index){
      const action =creators.getDeleteItem(index)
      Store.dispatch(action)
    }
    render(){
        return(
            <TodoListUi  inputVal = {this.state.inputVal} requestList = {this.state.requestList} handleClick = {this.handleClick} handleChange = {this.handleChange} todoList = {this.state.todoList} handleItemDelete = {this.handleItemDelete}/>
        )
    }
}
export default App   