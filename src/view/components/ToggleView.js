import React from 'react'
export default class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state = {buttonStatus:true,ButtonStatus:true,params:'传参'}
    }
    toggle(val){
        console.log(`这是传递的参数：${val}`)
        // this.setState({
        //     buttonStatus:!this.state.buttonStatus
        // })
        //状态更新可能是异步的
        this.setState(prevState=>({
            buttonStatus:!prevState.buttonStatus
        }))
    }
    Toggle(val){
        console.log(`这是传递的参数：${val}`)
        // this.setState({
        //     buttonStatus:!this.state.buttonStatus
        // })
        //状态更新可能是异步的
        this.setState(prevState=>({
            ButtonStatus:!prevState.ButtonStatus
        }))
    }
    render(){
        return(
            <div className='toggle'>
                <h3 className='title'>状态更新可能是异步的</h3>
                <button onClick={this.toggle.bind(this,this.state.params)}>{this.state.buttonStatus?'on':'off'}</button>
                <button onClick={e=>this.Toggle(this.state.params,e)}>{this.state.ButtonStatus?'on':'off'}</button>
                <p>你必须谨慎对待 JSX 回调函数中的 this，类的方法默认是不会绑定 this 的。如果你忘记绑定并把它传入 onClick, 当你调用这个函数的时候 this 的值会是 undefined。</p>
                <p>值得注意的是，通过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面，</p>
            </div>
        )
    }
}