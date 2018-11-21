import React from 'react'
export default class ClassProperty extends React.Component{
    constructor(props){
        super(props)
        this.state = {msg:'hbb'}
    }
    // handleClick = () => {
    //     alert(this.state.msg)
    // }
    handleClick(){
        alert(this.state.msg)
    }
    render(){
        return(
            <div className='click' onClick={e=>this.handleClick(e)}>实验性属性（省略bing(this)）{this.state.msg}</div>
        )
    }
}