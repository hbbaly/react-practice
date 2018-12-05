import React from 'react'
import { Input , Button,List  } from 'antd';
import {createStore} from 'redux'
import 'antd/dist/antd.css';
import reducer from '../store/reducers/index'
const store = createStore(reducer)
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
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
        console.log(store,'add')
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
               <h2>使用redux和ant design编写todoList</h2>
               <div>
                <Input placeholder="Basic usage" />
                <Button type="primary">Add</Button>
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
               </div>
            </div>
        )
    }
}
export default App   