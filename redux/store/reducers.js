const defaultVal = {
    inputVal:'hbb',
    todoList:[1,2,3]
}
// reducer 可以接受state ，但是不能改变state       const newVal = JSOn.parse(JSON.stringify(state))
export default (state = defaultVal,action) => {
    // state : store中的数据，默认是一个对象
    switch(action.type){
        case('changeInput'):
        const newVal = JSON.parse(JSON.stringify(state))
        newVal.inputVal = action.value
        return newVal
        default:
        return state
    }
}