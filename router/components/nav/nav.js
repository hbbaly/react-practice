import React from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import  Home from './home'
import About from './about'
import Topics from './topics'
export default class Nav extends React.Component{
  constructor(props){
    super(props)
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
        </div>
      </Router>
    )
  }
}