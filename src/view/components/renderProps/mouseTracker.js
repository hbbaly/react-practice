import React from 'react'
import MouseWithCat from './mouseWithCat'
import Cat from './cat'
export default class MouseTracker extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div >
                <h1>Move the mouse around!</h1>
                <MouseWithCat render={mouse=>(
                    <Cat mouse={mouse}></Cat>
                )} />
            </div>
        )
    }
}