import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from "react-router-dom";
  import Person from './person'
export default class Recursive extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Router>
                <Person match={{params:{id:0},url:'/recursive'}}></Person>
            </Router>
        )
    }
}