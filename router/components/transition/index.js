import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
import NavLink from './navlink'
import HSL from './hsl'
import RGB from './rgb'
import './index.css'
export default class Transition extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log(this.props,'transition')
  }
  render(){
    return(
      <Router>
          <Route render={({location})=>(
              <div >
                <Route exact path='/transition' render={()=><Redirect to='/hsl/10/90/60' />}></Route>
                <ul>
                    <NavLink to="/hsl/10/90/50">Red</NavLink>
                    <NavLink to="/hsl/120/100/40">Green</NavLink>
                    <NavLink to="/rgb/33/150/243">Blue</NavLink>
                    <NavLink to="/rgb/240/98/146">Pink</NavLink>
                </ul>
                <div>
                    {/* <TransitionGroup key={location.key} class={styles.fade} timeout={300}> */}
                        <CSSTransition key={location.key} class='fade' timeout={600}>
                            <Switch location={location}>
                                <Route exact path='/hsl/:h/:s/:l' component={HSL}></Route>
                                <Route exact path='/rgb/:r/:g/:b' component={RGB}></Route>
                                <Route  render={()=><div>not found</div>}></Route>
                            </Switch>
                        </CSSTransition>
                    {/* </TransitionGroup> */}
                </div>
              </div>
          )}></Route>
      </Router>
    )
  }
}