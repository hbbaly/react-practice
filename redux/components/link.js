import React from 'react'
import PropTypes from 'prop-types'
class Link extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const props = this.props
        return(
            <button disabled={props.active} onClick = {props.handleClickLink} style={{marginLeft:'4px'}}>
                {props.children}
            </button>
        )
    }
}
Todo.PropTypes = {
    handleClickLink:PropTypes.func.isRequired,
    active:PropTypes.bool.isRequired,
    children:PropTypes.func.isRequired
}
export default Link