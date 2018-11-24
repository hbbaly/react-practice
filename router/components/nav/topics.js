import React from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Topic from './topic'
export default class Topics extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const path = this.props.match.path
    return(
      <div>
         <h1>TOPICS</h1>
        <div>
          <ul>
            <li>
              <Link to={`${path}/rendering`}>Rendering with React</Link>
            </li>
            <li>
              <Link to={`${path}/components`}>Components</Link>
            </li>
            <li>
              <Link to={`${path}/props-v-state`}>Props v. State</Link>
            </li>
          </ul>
          <hr></hr>
          <Route path={`${path}/:topicId`} component={Topic}></Route>
          <Route path={path} exact render={() =><h3>please select a topic</h3>}></Route>
        </div>
      </div>
    )
  }
}