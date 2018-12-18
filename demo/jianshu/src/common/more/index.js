import React from 'react'
import {MoreWrapper} from './style'
export default class More extends React.Component{
    render(){
        return(
            <MoreWrapper onClick={this.props.getMoreData}>
                {this.props.content}
            </MoreWrapper>
        )
    }
}