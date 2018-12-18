import ActionTypes from './actionTypes'
import {fromJS} from 'immutable'
const defaultState = fromJS({
  articleList:[],
  showGoTop:false
})
const articleList = (state = defaultState,action) => {
  switch(action.type){
    case ActionTypes.GET_ARTICLE_LIST:
      return state.set('articleList',state.get('articleList').concat(action.data))
    case ActionTypes.CHANGE_GOTOP:
      return state.set('showGoTop',action.showGoTop)
    default:
      return state
  }
}
export default articleList