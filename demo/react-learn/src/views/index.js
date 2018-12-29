import React from 'react'
import Typechecking from '../components/index/Typechecking'
import Refs from '../components/index/Refs'
import VirtualDom from '../components/index/VirtualDom'
export default class Index extends React.Component{
  constructor(){
    super()
    this.changeName = this.changeName.bind(this)
    this.state = {
      name:'hbbaly',
      age:20
    }
  }
  changeName(){
    this.setState({
      name:'ly'
    })
  }
  render(){
    const  { name, age } = this.state
    return(
      <div className="page page-index">
      <button onClick = {this.changeName}>change name</button>
        <Typechecking name={name} age = {age}>
          <p>my name , my age </p>
        </Typechecking>
        <Refs />
        <VirtualDom  name={name} />
      </div>
    )
  }
}