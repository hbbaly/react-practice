import React from 'react'
import {JianShuHeader,HeaderWrapper,Logo,HeaderContent,HeaderTitleItem,Search} from './style'
import { CSSTransition } from 'react-transition-group';
// const titleItem = [
//   {
//     icon:''
//   }
// ]
export default class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      focused:false
    }
  }
  handleFocus(){
    this.setState({
      focused:true
    })
  }
  handleBlur(){
    this.setState({
      focused:false
    })
  }
  render(){
    return(
      <JianShuHeader>
        <HeaderWrapper>
          <Logo />
          <HeaderContent >
            <HeaderTitleItem color>
              <i className="iconfont">&#xe629;</i>
              发现
            </HeaderTitleItem>
            <HeaderTitleItem bg>
              <i className="iconfont">&#xe613;</i>
              关注
            </HeaderTitleItem>
            <HeaderTitleItem bg>
              <i className="iconfont">&#xe644;</i>
              消息
            </HeaderTitleItem>
            <HeaderTitleItem>
            <CSSTransition
              timeout={300}
              classNames="slide">
              <Search className={this.state.focused?'focused':''} onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)}>
              </Search>
              </CSSTransition>
              <i className={this.state.focused?'iconfont search focused':'iconfont search'}>&#xe63a;</i>
            </HeaderTitleItem>
          </HeaderContent>
        </HeaderWrapper>
      </JianShuHeader>
    )
  }
}