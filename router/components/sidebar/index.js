import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from "react-router-dom";
  import sidebar from './index.css'
export default class SideBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            routes:[
                {
                    path:'/',
                    exact:true,
                    sideBar:()=><div>home</div>,
                    main:()=><div>HOME</div>
                },
                {
                    path:'/bublegum',
                    sideBar:()=><div>bublegum</div>,
                    main:()=><div>BUBLEGUM</div>
                },
                {
                    path:'/shoelaces',
                    sideBar:()=><div>shoelaces</div>,
                    main:()=><div>SHOELACES</div>
                },
            ]
        }
    }
    render(){
        return(
            <Router>
                <div class={sidebar.nav}>
                    <div class={sidebar.nav_left}>
                    <div>
                        <div>
                            <Link to='/'>Home</Link>
                        </div>
                        <div>
                            <Link to='/bublegum'>Bublegum</Link>
                        </div>
                        <div>
                            <Link to='/shoelaces'>Shoelaces</Link>
                        </div>
                        </div>
                        {this.state.routes.map((route,index)=>(
                            <Route key={index} path={route.path} exact={route.exact} component={route.sideBar}></Route>
                        ))}
                    </div>
                    <div class={sidebar.nav_right}>
                    {this.state.routes.map((route,index)=>(
                            <Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
                        ))}
                    </div>
                </div>
            </Router>
        )
    }
}