import React from 'react'
import {connect} from 'react-redux'
// import store from '../../store/index'
import store from './store'
import {JianShuHeader,HeaderWrapper,Logo,HeaderContent,HeaderTitleItem,Search,SearchInfo,SearchTitleWrapper,SearchItem,SearchTitle,SearchSwitch,Login,Register,Write} from './style'
import { CSSTransition } from 'react-transition-group';
class Header extends React.Component{
  // constructor(props){
  //   super(props)
  // }
  getSearchInfoList() {
    const newPageList = this.props.SearchInfoList.toJS()
  
    if(newPageList.length){
      if(this.props.focused||this.props.mouseIn){
        const pageList = []
        const MaxLength = (this.props.page+1)*10>newPageList.length?newPageList.length:(this.props.page+1)*10
      for(let i = (this.props.page*10);i<MaxLength;i++){
        pageList.push(<SearchItem key={newPageList[i]}>{newPageList[i]}</SearchItem>)
      }
        return(
          <SearchInfo onMouseEnter={this.props.handleMouseEnter} onMouseLeave = {this.props.handleMouseLeave}>
                      <SearchTitleWrapper>
                        <SearchTitle>热门搜索</SearchTitle>
                        <SearchSwitch onClick={() => this.props.handleChangePage(this.props.page,this.props.totalPage,this.iconRotate)}>
                        <i ref = {(icon) => (this.iconRotate =icon) } className='iconfont'>&#xe62d;</i>
                          换一换
                        </SearchSwitch>
                      </SearchTitleWrapper>
                      {pageList}
                      {/* {SearchInfoList.map(item =><SearchItem>{item}</SearchItem> )} */}
                    </SearchInfo>
        )
      }else{
        return null
      }
    }
  }
  render(){
  // const {focused,mouseIn,handleFocus,handleBlur,SearchInfoList,page,totalPage,handleMouseLeave,handleMouseEnter,handleChangePage} = props

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
              in={this.props.focused}
              classNames="slide">
              <Search className={this.props.focused?'focused':''} onFocus={this.props.handleFocus} onBlur={this.props.handleBlur}>
              </Search>
              
              </CSSTransition>
              <i className={this.props.focused?'iconfont search focused':'iconfont search'}>&#xe63a;</i>
              
                {this.getSearchInfoList()}

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
}
const mapStateToProps = (state) => ({
  focused: state.get('header').get('focused'),
  SearchInfoList:state.get('header').get('infoList'),
  page:state.get('header').get('page'),
  mouseIn:state.get('header').get('mouseIn'),
  totalPage:state.get('header').get('totalPage'),
})
const mapDispatchToProps = (dispatch) => ({
  handleFocus(){
    dispatch(store.creators.getSearchList())
    dispatch(store.creators.handleFocused())
  },
  handleBlur(){
    dispatch(store.creators.handleBlur())
  },
  handleMouseEnter(){
    dispatch(store.creators.handleMouseEnter())
  },
  handleMouseLeave(){
    dispatch(store.creators.handleMouseLeave())
  },
  handleChangePage(page,totalPage,icon){
    let angle = icon.style.transform.replace(/[^0-9]/ig,'')   //将 129deg 取出数字
    if(angle){
      angle = parseInt(angle,10)
    }else{
      angle = 0
    }
    let rot = angle+360
    icon.style.transform = `rotate(${rot}deg)`
    if(page>=totalPage-1){
      dispatch(store.creators.handleChangePage(1))
    }else{
      dispatch(store.creators.handleChangePage(page+1))
    }
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)