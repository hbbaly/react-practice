import actionTypies from './actionTypies'
import axios from 'axios'
import {fromJS} from 'immutable'
const handleFocused = () => ({type:actionTypies.Focused})
const handleBlur = () => ({type:actionTypies.Blur})
const getSearchInfoList = (data) =>({type:actionTypies.InfoList,data:fromJS(data),totalPage:fromJS(Math.ceil(data.length/10))})
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
const handleMouseEnter = () => ({type:actionTypies.MouseEnter})
const handleMouseLeave = () => ({type:actionTypies.MouseLeave})
const handleChangePage = (page) => ({type:actionTypies.ChangePage,page})
export default {
  handleFocused,
  handleBlur,
  getSearchList,
  handleMouseEnter,
  handleMouseLeave,
  handleChangePage
}