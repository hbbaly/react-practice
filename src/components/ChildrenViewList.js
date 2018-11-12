/**
 * @author：hbbaly
 * @Date: 2018-11-12
 * @desc：父子组件传值
*/
import React from 'react'
export default class Children extends React.Component{
    constructor(props){
        super(props)
        this.state = {name:'hbbaly'}
    }
    render(){
        return(
            <div style={{marginTop:'10px'}} onClick={this.props.passTofa.bind(this,this.state.name)}>
                这是父组件传递过来的{this.props.passValue}
            </div>
        )
    }
}