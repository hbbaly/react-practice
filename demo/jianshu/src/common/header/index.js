import React from 'react'
import {connect} from 'react-redux'
// import store from '../../store/index'
import store from './store'
import {JianShuHeader,HeaderWrapper,Logo,HeaderContent,HeaderTitleItem,Search} from './style'
import { CSSTransition } from 'react-transition-group';
console.log(store)
const Header = (props) => {
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
            <HeaderTitleItem isSearch>
            <CSSTransition
              timeout={200}
              in={props.focused}
              classNames="slide">
              <Search className={props.focused?'focused':''} onFocus={props.handleFocus} onBlur={props.handleBlur}>
              </Search>
              </CSSTransition>
              <i className={props.focused?'iconfont search focused':'iconfont search'}>&#xe63a;</i>
            </HeaderTitleItem>
          </HeaderContent>
        </HeaderWrapper>
      </JianShuHeader>
  )
}
const mapStateToProps = (state) => ({
  focused:state.header.focused
})
const mapDispatchToProps = (dispatch) => ({
  handleFocus(){
    dispatch(store.creators.handleFocused())
  },
  handleBlur(){
    dispatch(store.creators.handleBlur())
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)