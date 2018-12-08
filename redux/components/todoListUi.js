import React from 'react'
class TodoListUi extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {
                    this.props.requestList.map(item=>(
                        <div key={item.id}>{item.title}</div>
                    ))
                }
            </div>
        )
    }
}
export default TodoListUi