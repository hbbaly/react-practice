import actionTypes from './actionTypies'
//Immutable数据就是一旦创建，就不能更改的数据。每当对Immutable对象进行修改的时候，就会返回一个新的Immutable对象，以此来保证数据的不可变。
import {fromJS} from 'immutable' 
//fromJS 把一个对象转换为immutable对象
const defaultState = fromJS({
  focused:false,
  mouseIn:false,
  infoList:[],
  page:0,
  totalPage:0
})
const headerReducer = (state=defaultState,action)=>{
  switch(action.type){
    case actionTypes.Focused:
      return state.set('focused',true)
    case actionTypes.Blur:
      return state.set('focused',false)
    case actionTypes.InfoList:
      return state.set('infoList',action.data).set('totalPage',action.totalPage)
    case actionTypes.MouseEnter:
      return state.set('mouseIn',true)
    case actionTypes.MouseLeave:
      return state.set('mouseIn',false)
    case actionTypes.ChangePage:
      return state.set('page',action.page)
    default:
      return state
  }
}
export default headerReducer