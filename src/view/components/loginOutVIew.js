import React from 'react'
export default class LoginOut extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div onClick={this.props.onClick}>
                loginout
            </div>
        )
    }
}