export default (state={counter:0},action)=> {
    switch(action.type){
        case 'ADD':
        return {counter:state.counter+1}
        case 'DESC':
        return{counter:state.counter-1}
    }
}