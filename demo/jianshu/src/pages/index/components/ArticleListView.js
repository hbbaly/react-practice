import React from 'react'
import {Link} from 'react-router-dom'
import {ArticleWrapper,ArticleItem,ArticleItemContent,ArticleTitle,ArticleDesc,ArticleMeta,ArticleComments,ArticleLikes} from './style'
export default class ArticleList extends React.Component{
  render(){
    return(
      <ArticleWrapper>
        {this.props.articleList.map(item=> (

            <ArticleItem key={item.key}>
              <ArticleItemContent>
                <Link to={`/detail/${item.object.data.id}`} >
                <ArticleTitle>{item.object.data.title}</ArticleTitle>
                <ArticleDesc>{item.object.data.public_abbr}</ArticleDesc>
                <ArticleMeta>
                  <a className="nickname" target="_blank" href="/u/183101b09e46">{item.object.data.user.nickname}</a>
                  <ArticleComments>{item.object.data.public_comments_count}</ArticleComments>
                  <ArticleLikes>{item.object.data.likes_count}</ArticleLikes>
                </ArticleMeta>
                </Link>
              </ArticleItemContent>
              <img className="article-img" src={item.object.data.user.avatar} alt=' ' />

            </ArticleItem>

          ))}
      </ArticleWrapper>
    )
  }
}