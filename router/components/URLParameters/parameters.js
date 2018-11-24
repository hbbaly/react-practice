import React from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Child from './child'
export default class Parameters extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Router>
        <div>
          <h2>Accounts</h2>
          <ul>
            <li>
              <Link to='/netflix'>Netflix</Link>
            </li>
            <li>
              <Link to='/zillow-group'>Zillow Group</Link>
            </li>
            <li>
              <Link to='/Yahoo'>Yahoo</Link>
            </li>
            <li>
              <Link to='/modus-create'>modus-create</Link>
            </li>
          </ul> 
          <Route path="/:id" component={Child}></Route>
        </div>
      </Router>

    )
  }
}