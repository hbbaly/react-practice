import ActionTypes from './actionTypes'
import {fromJS} from 'immutable'
const defaultState = fromJS({
  detail:{}
})
const detail = (state = defaultState,action) => {
  switch(action.type){
    case ActionTypes.GET_DETAIL:
      return state.set('detail',action.data)
    default:
      return state
  }
}
export default detail