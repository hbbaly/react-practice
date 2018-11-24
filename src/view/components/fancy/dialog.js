import React from 'react'
import Fancy from './fancyBorder'
export default class Dialog extends React.Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef();
    }
    componentWillMount(){
        //props 中有两个dom ， 一个input， 一个button， 类似插槽
        console.log(this.props)
        console.log(this.myRef.current,'refs')  // dom节点还没有加载出来，null refs   、、ref 的更新会发生在componentDidMount 或 componentDidUpdate 生命周期钩子之前。
    }
    componentDidMount(){
        // ref 用法，不要过度的使用ref ，尽量提升state，ref操作dom影响性能。与vue中ref类似

        // ## 你不能在函数式组件上使用 ref 属性，因为它们没有实例
        console.log(this.myRef.current,'refs')
    }
    render(){
        return(
            <div className='dialog' ref={this.myRef}>
                <Fancy color="red">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.msg}</p>
                    {this.props.children}
                </Fancy>
            </div>
        )
    }
}