import {Focused,Blur} from './actionTypies'

const defaultState = {
  focused:false
}
export default (state=defaultState,action)=>{
  const newState = JSON.parse(JSON.stringify(state))
  if(action.type===Focused){
    newState.focused = true
  }
  if(action.type===Blur){
    newState.focused = false
  }
  return newState
}