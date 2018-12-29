import React from 'react'
import LifeCycleView from '../components/lifeCycle/index'
export default class LifeCycle extends React.Component{
  constructor () {
    super ()
    this.state = {
      name:'hbb'
    }
  }
  render(){
    return(
      <div className="page page-lifecycle">
        <LifeCycleView name= {this.state.name} />
      </div>
    )
  }
}