import React from 'react'
export default class Cat extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const mouse = this.props.mouse
        return(
            <div className='cat'>
                <img src={require('./timg.jpg')} style={{position:'absolute',left:mouse.x,right:mouse.y,width:'300px',height:'300px',zIndex:-1}}/>
                <p>x:{mouse.x}</p>
                <p>y:{mouse.y}</p>
            </div>
        )
    }
}