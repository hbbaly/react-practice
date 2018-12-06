import React from 'react'
import { Input , Button,List  } from 'antd';
import 'antd/dist/antd.css';
export default class TodoListUi extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <button onClick={()=>this.props.handleAdd()}>
                    加
                </button>
                <button onClick={()=>this.props.handleDesc()}>
                    减
                </button>
               <h2>使用redux和ant design编写todoList</h2>
               <div style={{display:'flex',padding:'20px'}}>
                <Input placeholder="Basic usage" value={this.props.inputVal} onChange = {this.props.handleChange}/>
                <Button type="primary" onClick = {this.props.handleClick}>Add</Button>
               </div>
               <List style={{width:'90%',margin:'0 auto'}}
                    bordered
                    dataSource={this.props.todoList}
                    renderItem={(item ,index)=> (<List.Item onClick={()=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
                />
            </div>
        )
    }
}