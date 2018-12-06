import actionTypes from './actionTypes'
const defaultVal = {
    inputVal:'',
    todoList:[]
}
// reducer 可以接受state ，但是不能改变state       const newVal = JSOn.parse(JSON.stringify(state))
export default (state = defaultVal,action) => {
    // state : store中的数据，默认是一个对象
    const newVal = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case(actionTypes.CHANGEINPUT):
          newVal.inputVal = action.value
          return newVal
        case(actionTypes.ADD):
          newVal.todoList.push(newVal.inputVal)
          newVal.inputVal = ''
          return newVal
        case(actionTypes.DELETE):
          newVal.todoList.splice(action.index,1)
          return newVal
        default:
          return state
    }
}