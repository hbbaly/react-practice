import React from 'react'
import propTypes from 'prop-types'
class Typechecking extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }
  render(){
    const {name,age,children} = this.props
    return(
      <div className='type-check'>
        <p>name: {name}</p>
        <p>age:{age}</p>
        {children}
      </div>
    )
  }
}
// 规定name，age的类型，是否必传
Typechecking.propTypes = {
  name:propTypes.string.isRequired,
  age:propTypes.number,
  child:propTypes.element
}
// name，age的默认值
Typechecking.defaultProps = {
  name:'hbb',
  age:18
}
export default Typechecking