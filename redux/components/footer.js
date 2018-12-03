import React from 'react'
import FilterLink from './filterLink'
import {VisibilityFilter} from '../store/reducers'
class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const props = this.props
        return(
            <div>
                <span>show:</span>
                <FilterLink filter = {VisibilityFilter.SHOW_ALL}>ALL</FilterLink>
                <FilterLink filter = {VisibilityFilter.SHOW_ACTIVE}>ACTIVE</FilterLink>
                <FilterLink filter = {VisibilityFilter.SHOW_COMPLETED}>COMPLETED</FilterLink>
            </div>
        )
    }
}
export default Footer   