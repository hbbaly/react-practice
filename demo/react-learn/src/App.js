import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './views/index'
import SetState from './views/setState'
import LifeCycle from './views/lifeCycle'
import Redux from './views/redux'
import {Provider} from 'react-redux'
import store from './store/index'
import './App.css'
class App extends Component {
  jumpPath (path) {
    console.log(path,'path')
  }
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="nav">
              <Link className="nav-item" to="/index">Index</Link>
              <Link className="nav-item" to="/setstate">SetState</Link>
              <Link className="nav-item" to="/lifecycle">LifeCycle</Link>
              <Link className="nav-item" to ='/redux'>Redux</Link>
            </div>
            <Route path="/index" exact component={Index}></Route>
            <Route path="/setstate" component={SetState}></Route>
            <Route path="/lifecycle" component={LifeCycle}></Route>
            <Route path="/redux" component={Redux}></Route>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
