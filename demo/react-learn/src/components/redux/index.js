import React from 'react'
import {connect} from 'react-redux'
import store from './store/index'
class ReduxView extends React.Component{
  componentDidMount(){
    this.props.getRequestList()
  }
  render(){
    const {list} = this.props
    return(
      <div>
        {
          list.map(item => (
            <p key={item.id}>{item.title}</p>
          ))
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  list:state.get('redux').get('list')
})

const  mapDispatchToProps = (dispatch) => ({
  getRequestList(){
    dispatch(store.Creators.getDataList({page:1,tab:'ask',limit:10}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxView)