import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import creators from './creators'
import actionTypes from './actionTypes'
function* fetchList (){
  const res = yield axios.get('https://www.vue-js.com/api/v1/topics')
  const action = creators.getRequestData(res.data.data)
  console.log(action)
  yield put(action)
}
function* mySaga() {
  yield takeEvery(actionTypes.GETVUELIST, fetchList);
}
export default mySaga