import React from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
export default class Nav extends React.Component{
  constructor(props){
    super(props)
  }
  //  {match ? "> " : ""} 这里的match 是Route 三种用法的 
  //<Route component></Route>
// <Route render>
// <Route children>   match 是指url匹配成功 true 否则为null
  render(){
    return(
      <Route path={this.props.to} exact={this.props.activeOnlyWhenExact} children={({ match }) =>(
        <div className={match ? "active" : ""}>
          {match ? "> " : ""}
          <Link to={this.props.to}>{this.props.label}</Link>
        </div>
      ) }>
      </Route>
    )
  }
}