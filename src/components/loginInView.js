import React from 'react'
export default class LoginIn extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(nextState){
        console.log(nextState)
        if(nextState.isLogin!==this.state.isLogin){}
    }
    render(){
        return(
            <div onClick={e=>this.props.onClick('子组件传递给父组件',e)}>
                loginin
            </div>
        )
    }
}