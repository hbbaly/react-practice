import actionTypes from './actionTypies'
import {fromJS} from 'immutable'
const defaultState = fromJS({
  focused:false
})
console.log(defaultState)
const headerReducer = (state=defaultState,action)=>{
  // const newState = JSON.parse(JSON.stringify(state))
  if(action.type===actionTypes.Focused){
    return state.set('focused',true)
    // newState.focused = true
  }
  if(action.type===actionTypes.Blur){
    return state.set('focused',false)
    // newState.focused = false
  }
  return state
}
export default headerReducer