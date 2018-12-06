import actionTypes from './actionTypes'
const getInputChangeAction= (value)=> ({type:actionTypes.CHANGEINPUT,value})
const getAddItem = ()=> ({type:actionTypes.ADD})
const getDeleteItem = (index)=>({type:actionTypes.DELETE,index})
const getRequestData = (data)=>({type:actionTypes.REQUESTDATA,data})
export default{
  getInputChangeAction,
  getAddItem,
  getDeleteItem,
  getRequestData
}