import React from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Home from '../nav/home'
import About from '../nav/about'
import Nav from './nav'
export default class Custom extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Router>
        <div>
          <div className='nav'>
          <Nav activeOnlyWhenExact={true} to="/home" label="Home" />
          <Nav to="/about" label="About" />
          </div>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </div>
      </Router>
    )
  }
}