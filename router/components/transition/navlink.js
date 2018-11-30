import React from 'react'
import {Link} from 'react-router-dom'
export default class NavLink extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <li class="navlink">
        <Link {...this.props}></Link>
      </li>
    )
  }
}