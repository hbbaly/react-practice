import React from 'react'
import {BrowserRouter as Router, Route,Link,withRouter} from 'react-router-dom'
import  Home from './home'
import About from './about'
import Topics from './topics'
import Match from '../noMatch/index'

class Nav extends React.Component{
  constructor(props){
    super(props)
    this.jumpPath = this.jumpPath.bind(this)
  }
  jumpPath(){
    console.log('jump',this.props)
    this.props.history.push({path:'/about'})
  }
  render(){
    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr></hr>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about"  component={About}></Route>
          <Route path="/topics"  component={Topics}></Route>
          <Route path="/match"  component={Match}></Route>
        </div>
      </Router>
    )
  }
}
export default withRouter(Nav)