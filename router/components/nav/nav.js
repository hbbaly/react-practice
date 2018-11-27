import React from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import  Home from './home'
import About from './about'
import Topics from './topics'
export default class Nav extends React.Component{
  constructor(props){
    super(props)
    this.jump = this.jump.bind(this)
  }
  jump(){
    console.log('jump')
    this.props.history.push('/about')
  }
  render(){
    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li onClick={this.jump}>
              About-jump
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