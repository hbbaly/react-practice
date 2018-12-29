import axios from 'axios'
import ActionTypes from './actionTypes'
const getData = (data) => ({ type:ActionTypes.GET_DATA_LIST, data })
const getDataList = (data) => {
  return dispatch => {
    axios.get(`https://cnodejs.org/api/v1/topics?page=${data.page}&tab=${data.tab}&limit=${data.limit}`).then(res => {
      const action = getData(res.data.data)
      dispatch(action)
    })
  }
}
export default {
  getData,
  getDataList
}