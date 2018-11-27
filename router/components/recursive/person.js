import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from "react-router-dom";
export default class Person extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    componentWillMount(){
        console.log(this.props,'recursive')
    }
    render(){
        const PEEPS=[
            { id: 0, name: "Michelle", friends: [1, 2, 3] },
            { id: 1, name: "Sean", friends: [0, 3] },
            { id: 2, name: "Kim", friends: [0, 1, 3] },
            { id: 3, name: "David", friends: [1, 2] }
        ]
        function find(id){
           return PEEPS.find(p=>p.id===id)
        }
        let person = find(Number(this.props.match.params.id))    // 第二次点击的时候就会params。id为字符串
        return(
            <div>
                <h3>{person.name}</h3>
                {
                    person.friends.map(id=>(
                        <div key={id}>
                            <Link to={`${this.props.match.url}/${id}`}>{find(id).name}</Link>
                        </div>
                    ))
                }
                <Route path={`${this.props.match.url}/:id`} component={Person}></Route>
            </div>
        )
    }
}