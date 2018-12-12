import {Focused,Blur} from '../../../store/actionTypies'

const defaultState = {
  focused:false
}
const headerReducer = (state=defaultState,action)=>{
  const newState = JSON.parse(JSON.stringify(state))
  if(action.type===Focused){
    newState.focused = true
  }
  if(action.type===Blur){
    newState.focused = false
  }
  return newState
}
export default headerReducer