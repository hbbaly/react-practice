import axios from 'axios'
import ActionTypes from './actionTypes'
const getArticleList = (data) => ({type:ActionTypes.GET_ARTICLE_LIST,data})
const getArticleData = () => {
  return dispatch => {
    axios.get('/api/indexArticleList.json').then(res => {
      const action = getArticleList(res.data.data)
      dispatch(action)
    })
  }
}
const changeGoTop = (showGoTop) => ({
  type:ActionTypes.CHANGE_GOTOP,
  showGoTop
})
export  default{
  getArticleList,
  getArticleData,
  changeGoTop
}