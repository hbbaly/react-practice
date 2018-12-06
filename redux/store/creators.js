import actionTypes from './actionTypes'
const getInputChangeAction= (value)=> ({type:actionTypes.CHANGEINPUT,value})
const getAddItem = ()=> ({type:'ADD'})
const getDeleteItem = (index)=>({type:'DELETE',index})
export default{
  getInputChangeAction,
  getAddItem,
  getDeleteItem
}