import React from 'react'
import Store from '../store/index'
import creators from '../store/creators'
import TodoListUi from './todoListUi'
import {connect} from 'react-redux'
import { Input , Button , List  } from 'antd';
import 'antd/dist/antd.css';
class App extends React.Component{
    constructor(props){
        super(props)
        this.handleChangeVal = this.handleChangeVal.bind(this)
        this.state = Store.getState()    //把store中的数据赋值给组建的state
        Store.subscribe(this.handleChangeVal)  // 订阅handleChangeVal函数，当store放生改变会触发这个函数
    }
    componentDidMount(){
      Store.dispatch(creators.getVueList())
    }
    handleChangeVal(){
      this.setState(Store.getState())   // 订阅函数发生改变时， 重新更新试图
    }
    render(){
        return(
          <div>
               <h2>使用redux和ant design编写todoList</h2>
               <div style={{display:'flex',padding:'20px'}}>
                <Input placeholder="Basic usage" value={this.props.inputVal} onChange = {this.props.handleChange}/>
                <Button type="primary" onClick = {this.props.handleClick}>Add</Button>
               </div>
               <List style={{width:'90%',margin:'0 auto'}}
                    bordered
                    dataSource={this.state.todoList}
                    renderItem={(item ,index)=> (<List.Item onClick={()=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
                />
            <TodoListUi  requestList = {this.state.requestList} />                
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
  inputVal:state.inputVal
})
const mapDispatchToProps  = (dispatch) => ({
  handleChange(e){
    const action = creators.getInputChangeAction(e.target.value)
    dispatch(action)
  },
  handleClick(){
    /// 添加按钮
    const action = creators.getAddItem()
    dispatch(action)
  },
  handleItemDelete(index){
    const action =creators.getDeleteItem(index)
    dispatch(action)
  }
})
export default connect(mapStateToProps,mapDispatchToProps )(App)