const defaultVal = {
    inputVal:'',
    todoList:[]
}
// reducer 可以接受state ，但是不能改变state       const newVal = JSOn.parse(JSON.stringify(state))
export default (state = defaultVal,action) => {
    // state : store中的数据，默认是一个对象
    switch(action.type){
        case('changeInput'):
        const newVal = JSON.parse(JSON.stringify(state))
        newVal.inputVal = action.value
        return newVal
        case('ADD'):
        const newState = JSON.parse(JSON.stringify(state))
        newState.todoList.push(newState.inputVal)
        newState.inputVal = ''
        console.log(newState,'newState')
        return newState
        default:
        return state
    }
}