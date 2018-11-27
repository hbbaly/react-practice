import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Home from './home'
import WillMatch from './willMatch'
import NoMatch from './noMatch'
export default class Match extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to='/match'>home</Link>
                        </li>
                        <li>
                            <Link to='/will-match'>will-match</Link>
                        </li>
                        <li>
                            <Link to='/old-match'>Old Match, to be redirected</Link>
                        </li>
                        <li>
                            <Link to='/will-no-match'>will-no-match</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/match" exact component={Home} ></Route>
                        <Route path="/will-match" component={WillMatch} />
                        <Redirect from="/old-match" to="will-match" />
                        <Route component={NoMatch} />
                    </Switch>
                    
                </div>
            </Router>
        )
    }
}