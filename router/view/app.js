import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Nav from '../components/nav/nav'
import Parameters from '../components/URLParameters/parameters'
import RedirectUrl from '../components/redirect/index'
export default class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
          <div class="router">
            <h1>Router</h1>
            <Router>
              <div class="basic">
                <div class="router-basic">
                  <Link to="/basic">basic</Link>
                </div>
                <div class="router-params">
                  <Link to="/params">URL-Parameters</Link>
                </div>
                <div class="router-redirect">
                  <Link to="/redirecturl">Redirect</Link>
                </div>
                <Route path="/basic" component={Nav}></Route>
                <Route path="/params" component={Parameters}></Route>
                <Route path='/redirecturl' component={RedirectUrl}></Route>
              </div>
            </Router>
          </div>
        )
    }
}