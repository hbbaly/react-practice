import React from 'react'
import Typechecking from '../components/index/Typechecking'
import Refs from '../components/index/Refs'
export default class Index extends React.Component{
  constructor(){
    super()
    this.state = {
      name:'hbbaly',
      age:20
    }
  }
  render(){
    const  { name, age } = this.state
    return(
      <div className="page-index">
        <Typechecking name={name} age = {age}>
          <p>my name , my age </p>
        </Typechecking>
        <Refs />
      </div>
    )
  }
}