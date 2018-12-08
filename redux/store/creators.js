import actionTypes from './actionTypes'
// import axios from 'axios'
const getInputChangeAction= (value)=> ({type:actionTypes.CHANGEINPUT,value})
const getAddItem = ()=> ({type:actionTypes.ADD})
const getDeleteItem = (index)=>({type:actionTypes.DELETE,index})
const getRequestData = (data)=>({type:actionTypes.REQUESTDATA,data})
//
const getVueDemoList = ()=>({type:actionTypes.GETVUELIST})
export default{
  getInputChangeAction,
  getAddItem,
  getDeleteItem,
  getRequestData,
  getVueDemoList
}