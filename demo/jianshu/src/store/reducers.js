import HeaderReducer from '../common/header/store/reducers'
import ArticleList from '../pages/index/store/reducer'
import Detail from '../pages/detail/store/reducer'
import { combineReducers } from 'redux-immutable'
export default combineReducers({
  header:HeaderReducer,
  article:ArticleList,
  detail:Detail
})