import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './views/index'
import SetState from './views/setState'
import LifeCycle from './views/lifeCycle'
import  Todo from './views/todo'
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
              <Link className="list" to="/index">Index</Link>
              <Link className="list" to="/setstate">SetState</Link>
              <Link className="list" to="/lifecycle">LifeCycle</Link>
              <Link className="list" to ='/todo'>Todo</Link>
              <Link className="list" to ='/redux'>Redux</Link>
              <Route path="/index" exact component={Index}></Route>
              <Route path="/setstate" component={SetState}></Route>
              <Route path="/lifecycle" component={LifeCycle}></Route>
              <Route path="/todo" component={Todo}></Route>
              <Route path="/redux" component={Redux}></Route>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
