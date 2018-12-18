import React from 'react'
import {GoTopWrapper} from './style'
export default class GoTop extends React.PureComponent{
    render(){
        return(
            <GoTopWrapper onClick={this.props.goTop}>
                {this.props.content}
            </GoTopWrapper>
        )
    }
}