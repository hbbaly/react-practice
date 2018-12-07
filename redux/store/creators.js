import actionTypes from './actionTypes'
import axios from 'axios'
const getInputChangeAction= (value)=> ({type:actionTypes.CHANGEINPUT,value})
const getAddItem = ()=> ({type:actionTypes.ADD})
const getDeleteItem = (index)=>({type:actionTypes.DELETE,index})
const getRequestData = (data)=>({type:actionTypes.REQUESTDATA,data})

const getVueList = ()=>{
  return dispatch => {
    axios.get('https://www.vue-js.com/api/v1/topics').then(res=>{
      const data = res.data.data
      const action = getRequestData(data)
      dispatch(action)
    })
  }
}
export default{
  getInputChangeAction,
  getAddItem,
  getDeleteItem,
  getRequestData,
  getVueList
}