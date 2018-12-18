import axios from 'axios'
import ActionTypes from './actionTypes'
const getDetail = (data) => ({type:ActionTypes.GET_DETAIL,data})
const getDetailData = () => {
  return dispatch => {
    axios.get('/api/detail.json').then(res => {
      const action = getDetail(res.data.data)
      dispatch(action)
    })
  }
}
export  default{
  getDetail,
  getDetailData
}