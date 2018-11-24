import React from 'react'
export default class MouseWithCat extends React.Component{
    constructor(props){
        super(props)
        this.handleMove = this.handleMove.bind(this)
        this.state = {
            x:0,
            y:0
        }
    }
    handleMove(e){
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
        console.log(e.clientX, e.clientY)
    }
    render(){
        return(
            <div className='MouseWithCat' style={{height:'600px'}} onClick = {this.handleMove}>
                 {this.props.render(this.state)}
            </div>
        )
    }
}