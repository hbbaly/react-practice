import styled from 'styled-components'
export const ArticleWrapper = styled.div`
  // float:left;
  width:638px;
`
export const ArticleItem = styled.div`
  position: relative;
  width: 100%;
  // min-height:140px;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  .article-img{
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -60px;
    width: 150px;
    height: 100px;
  }
`
export const ArticleItemContent = styled.div`
  padding-right: 165px;
`
export const ArticleTitle = styled.a`
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: #333;
`
export const ArticleDesc = styled.p`
margin: 0 0 8px;
font-size: 13px;
line-height: 24px;
color: #999;
`
export const ArticleMeta = styled.div`
padding-right: 0!important;
font-size: 12px;
font-weight: 400;
line-height: 20px;
.nickname{
  margin-right: 10px;
  color: #787878;
  text-decoration: none;
}
`
export const ArticleComments  = styled.a`
margin-right: 10px;
color: #b4b4b4;
`
export const ArticleLikes  = styled.span`
margin-right: 10px;
color: #b4b4b4;
`