import React, { Component } from 'react';
class Clock extends Component {
  constructor(){
    super()
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }
  componentDidMount(){
    setInterval(()=> {
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000)
  }
  render(){
    return(
      <div>
        <h2>It is {this.state.time}</h2>
      </div>
    )
  }
}
export default Clock