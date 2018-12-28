import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './views/index'
import SetState from './views/setState'
import LifeCycle from './views/lifeCycle'
import './App.css'
class App extends Component {
  jumpPath (path) {
    console.log(path,'path')
  }
  render () {
    return (
      <Router>
        <div className="App">
            <Link className="list" to="/index">Index</Link>
            <Link className="list" to="/setstate">SetState</Link>
            <Link className="list" to="/lifecycle">LifeCycle</Link>
            <Route path="/index" exact component={Index}></Route>
            <Route path="/setstate" component={SetState}></Route>
            <Route path="/lifecycle" component={LifeCycle}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
