import React from 'react'
import {connect} from 'react-redux'
// import store from '../../store/index'
import store from './store'
import {JianShuHeader,HeaderWrapper,Logo,HeaderContent,HeaderTitleItem,Search,SearchInfo,SearchTitleWrapper,SearchItem,SearchTitle,SearchSwitch,Login,Register,Write} from './style'
import { CSSTransition } from 'react-transition-group';
const SearchInfoList = ["区块链", "小程序", "vue", "毕业", "PHP", "故事", "flutter", "理财", "美食", "投稿", "手帐", "书法", "PPT", "穿搭", "打碗碗花"]
const getSearchInfoList = (show) => {
  if(show){
    return(
      <SearchInfo >
                  <SearchTitleWrapper>
                    <SearchTitle>热门搜索</SearchTitle>
                    <SearchSwitch>
                    <i className='iconfont'>&#xe62d;</i>
                      换一换
                    </SearchSwitch>
                  </SearchTitleWrapper>
                  {SearchInfoList.map(item =><SearchItem>{item}</SearchItem> )}
                </SearchInfo>
    )
  }else{
    return null
  }
}
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
              
                {getSearchInfoList(props.focused)}

            </HeaderTitleItem>
            <HeaderTitleItem right>
              <i className='iconfont'>&#xe636;</i>
            </HeaderTitleItem>
          </HeaderContent>
          <Write>
          <i className="iconfont">&#xe600;</i>
          写文章
          </Write>
          <Register>注册</Register>
          <Login>登陆</Login>

        </HeaderWrapper>
      </JianShuHeader>
  )
}
const mapStateToProps = (state) => ({
  focused: state.get('header').get('focused')
})
const mapDispatchToProps = (dispatch) => ({
  handleFocus(){
    dispatch(store.creators.getSearchList())
    dispatch(store.creators.handleFocused())
  },
  handleBlur(){
    dispatch(store.creators.handleBlur())
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)