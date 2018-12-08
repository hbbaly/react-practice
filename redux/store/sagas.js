import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import creators from './creators'
import actionTypes from './actionTypes'
function* fetchList (){
  try{
    const res = yield axios.get('https://www.vue-js.com/api/v1/topics')
    const action = creators.getRequestData(res.data.data)
    yield put(action)
  }catch(e){
    console.log('请求失败')
  }
}
function* mySaga() {
  yield takeEvery(actionTypes.GETVUELIST, fetchList);
}
export default mySaga