import React from 'react'
import { Input , Button,List  } from 'antd';
import {createStore} from 'redux'
import 'antd/dist/antd.css';
import reducer from '../store/reducers/index'
const store = createStore(reducer)
import Store from '../store/index'
class App extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeVal = this.handleChangeVal.bind(this)
        console.log(Store.getState(),'test')
        this.state = Store.getState()    //把store中的数据赋值给组建的state
        Store.subscribe(this.handleChangeVal)  // 订阅handleChangeVal函数，当store放生改变会触发这个函数

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
        console.log(store,'add')
        console.log(store.getState(),'add')
    }
    handleDesc(){
        store.dispatch({type:'DESC'})
        console.log(store.getState(),'desc')
    }
    handleChange(e){
        console.log(e.target.value)
        Store.dispatch({type:'changeInput',value:e.target.value})
    }
    handleChangeVal(){
      console.log('store change')
      this.setState(Store.getState())   // 订阅函数发生改变时， 重新更新试图
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
               <h2>使用redux和ant design编写todoList</h2>
               <div style={{display:'flex',padding:'20px'}}>
                <Input placeholder="Basic usage" value={this.state.inputVal} onChange = {this.handleChange}/>
                <Button type="primary">Add</Button>
               </div>
               <List style={{width:'90%',margin:'0 auto'}}
                    bordered
                    dataSource={this.state.todoList}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}
export default App   