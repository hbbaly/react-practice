import ActionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  list:[]
})

const ReduxData = (state = defaultState, action) => {
  switch(action.type){
    case ActionTypes.GET_DATA_LIST:
    return state.set('list',action.data)
    default:
    return state
  }
}
export default ReduxData