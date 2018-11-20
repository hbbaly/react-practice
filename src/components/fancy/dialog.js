import React from 'react'
import Fancy from './fancyBorder'
export default class Dialog extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        //props 中有两个dom ， 一个input， 一个button， 类似插槽
        console.log(this.props)
    }
    render(){
        return(
            <div className='dialog'>
                <Fancy color="red">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.msg}</p>
                    {this.props.children}
                </Fancy>
            </div>
        )
    }
}