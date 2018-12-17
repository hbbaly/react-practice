import ActionTypes from './actionTypes'
import {fromJS} from 'immutable'
const defaultState = fromJS({
  articleList:[]
})
const articleList = (state = defaultState,action) => {
  switch(action.type){
    case ActionTypes.GET_ARTICLE_LIST:
      return state.set('articleList',action.data)
    default:
      return state
  }
}
export default articleList