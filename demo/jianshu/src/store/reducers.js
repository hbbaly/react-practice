import HeaderReducer from '../common/header/store/reducers'
import { combineReducers } from 'redux-immutable'
export default combineReducers({
  header:HeaderReducer
})