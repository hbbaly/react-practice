/**
 * @author：hbbaly
 * @Date: 2018-11-12
 * @desc：官网时钟例子
*/
import React from 'react'
export default class Click extends React.Component{
    constructor(props){
        super(props)
        this.state = {date:new Date()}
    }
    componentDidMount(){
        this.timer = setInterval(()=>this.click(),1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    click(){
        this.setState({
            date:new Date()
        })
    }
    render(){
        return(
            <div className='click'>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}