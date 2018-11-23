import React from 'react'
export default class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError:false
        }
    }
    // 错误边界使用例子
    componentDidCatch(error, info){
        this.setState({hasError:true})
        console.log(error, info);
    }
    render(){
        //当props。children组件或者变量发生错误的时候，就是显示 <h1>Something went wrong.</h1>
            if(this.state.hasError) {return <h1>Something went wrong.</h1>}
            return this.props.children;
    }
}