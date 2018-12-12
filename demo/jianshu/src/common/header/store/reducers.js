import actionTypes from './actionTypies'
//Immutable数据就是一旦创建，就不能更改的数据。每当对Immutable对象进行修改的时候，就会返回一个新的Immutable对象，以此来保证数据的不可变。
import {fromJS} from 'immutable' 
//fromJS 把一个对象转换为immutable对象
const defaultState = fromJS({
  focused:false,
  infoList:[]
})
const headerReducer = (state=defaultState,action)=>{
  // const newState = JSON.parse(JSON.stringify(state))
  if(action.type===actionTypes.Focused){
    // 使用set改变immutable中的数据修改  get数据获取
    return state.set('focused',true)
    // newState.focused = true
  }
  if(action.type===actionTypes.Blur){
    return state.set('focused',false)
    // newState.focused = false
  }
  if(action.type===actionTypes.InfoList){
    return state.set('infoList',action.data)
  }
  return state
}
export default headerReducer