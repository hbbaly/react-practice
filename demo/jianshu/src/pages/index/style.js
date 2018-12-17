import styled from 'styled-components'
export const IndexWrapper = styled.div`
  width:960px;
  margin:0 auto;
`
export const IndexBannerList = styled.div`
  display:inline-block;
  width:66.66667%;
  padding-top:30px;
  .banner-item{
    display:block;
    width:100%;
    height:100%;
  }
`
export const IndexNavList = styled.div`
  display:inline-block;
  float:right;
  width:280px;
  padding-top:30px;
`
export const IndexNavItem = styled.a.attrs({
  target:'_blank',
  href:props=>props.href
})`
  display:block;
  width:280px;
  height:50px;
  margin-bottom:6px;
  color: #333;
  text-decoration: none;
  background:url(${props=>props.url}) no-repeat center center;
  background-size:contain;
  cursor:pointer;

`