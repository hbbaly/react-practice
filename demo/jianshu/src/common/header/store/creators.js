import actionTypies from './actionTypies'
import axios from 'axios'
import {fromJS} from 'immutable'
const handleFocused = () => ({type:actionTypies.Focused})
const handleBlur = () => ({type:actionTypies.Blur})
const getSearchInfoList = (data) =>({type:actionTypies.InfoList,data:fromJS(data)})
const getSearchList = ()=>{
  return dispatch => {

    axios.get('/api/searchInfoList.json').then(res=>{
      if(res.data.code===200){
        const data = res.data.data
        const action = getSearchInfoList(data)
        dispatch(action)
      }
    })
  }
}
export default {
  handleFocused,
  handleBlur,
  getSearchList
}