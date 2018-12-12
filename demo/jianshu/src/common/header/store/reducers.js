import actionTypes from './actionTypies'

const defaultState = {
  focused:false
}
const headerReducer = (state=defaultState,action)=>{
  const newState = JSON.parse(JSON.stringify(state))
  if(action.type===actionTypes.Focused){
    newState.focused = true
  }
  if(action.type===actionTypes.Blur){
    newState.focused = false
  }
  return newState
}
export default headerReducer