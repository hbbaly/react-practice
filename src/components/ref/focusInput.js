import React from 'react'
export default class FocusInput extends React.Component{
    constructor(props){
        super(props)
        // this.focusInput = this.focusInput.bind(this)
        this.textInput = null
        this.setInputFocus = element=>{
            this.textInput = element
        }
        this.focusInput = () =>{
            //// 直接使用原生 API 使 text 输入框获得焦点
            if(this.textInput) this.textInput.focus()
        }
    }
    componentDidMount(){
        // 组件加载后获取焦点
        this.focusInput()
    }
    render(){
        return(
            /// 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React
            <div className="inputFocus">
                <input type='text' ref={this.setInputFocus} />
                <button onClick={this.focusInput}>focus</button>
            </div>
        )
    }
}