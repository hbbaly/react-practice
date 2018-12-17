import React from 'react'
import {connect} from 'react-redux'
import { IndexWrapper,IndexBannerList,IndexNavList,IndexNavItem} from './style'
import  ArticleList from './components/ArticleListView'
import store from './store/index'
// import ActionCreators from './store/actionTypes'
class Index extends React.Component{
  componentDidMount(){
    this.props.getArticleData()
  }
  render(){
    const navList = [{
      href:'https://www.jianshu.com/trending/weekly?utm_medium=index-banner-s&utm_source=desktop',
      url:require('./images/nav-item1.png'),
    },
    {
      href:'https://www.jianshu.com/trending/monthly?utm_medium=index-banner-s&utm_source=desktop',
      url:require('./images/nav-item2.png'),
    },
    {
      href:'https://www.jianshu.com/mobile/books?category_id=284',
      url:require('./images/nav-item3.png'),
    },
    {
      href:'https://www.jianshu.com/publications',
      url:require('./images/nav-item4.png'),
    },
    {
      href:'https://www.jianshu.com/c/e048f1a72e3d?utm_medium=index-banner-s&utm_source=desktop',
      url:require('./images/nav-item5.png'),
    }
  ]
    return(
      <IndexWrapper>
        <IndexBannerList>
          <img className="banner-item" src="https://upload.jianshu.io/admin_banners/web_images/4584/fab2b75c99249e7c0c2a64a0e1dceb1127be254c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
        </IndexBannerList>
        <IndexNavList>
          {navList.map(item=>(
            <IndexNavItem url={item.url} href={item.href}>
            </IndexNavItem>
          ))}
        </IndexNavList>
        <ArticleList></ArticleList>
      </IndexWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  articleList:state.get('article').get('articleList'),
})
const mapDispatchToProps = (dispatch) => ({
  getArticleData () {
    dispatch(store.creators.getArticleData())
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)