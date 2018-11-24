import React from 'react';
import Nav from '../components/nav/nav'
export default class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
          <div class="router">
            <Nav></Nav>
          </div>
        )
    }
}