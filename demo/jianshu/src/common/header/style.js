import styled from 'styled-components'
import logoImg from '../../statics/logo.png'
export const JianShuHeader  = styled.div`
  width:100%;
  border-bottom:1px solid #f0f0f0;
`
export const HeaderWrapper = styled.div`
  width:1440px;
  height:56px;
  margin:0 auto;
`
export const Logo = styled.a.attrs({
  href:'/'
})`
  float:left;
  display:block;
  width:100px;
  height:56px;
  background:url(${logoImg});
  background-size:contain;

`
export const HeaderContent = styled.div`
  float:left;
  width:960px;
  height:56px;
  margin:0 240px 0 140px;
`
export const HeaderTitleItem = styled.div`
  position:relative;
  float:left;
  padding:${props=>!props.isSearch?'15px;':'9px 15px;'}
  line-height:26px;
  color: ${props => props.color ? ' #ea6f5a;' : '#333;'};
  cursor:pointer;
  .iconfont{
    margin-right:5px;
    font-size:26px;
    vertical-align: bottom;
    border-radius:50%;

    &.focused{
      background:#777;
      color:#fff;
    }
  }
  :hover{
    background:${props => props.bg ? ' #f5f5f5;' : '#fff;'}
  }
  .search{
    position:absolute;
    top:50%;
    right:15px;
    margin-top:-12px;
  }
  .slide-enter {
    transition all .2s ease-out;
  }
  .slide-enter-active {
    width:240px;
  }
  .slide-exit {
    transition all .2s ease-out;
  }
  .slide-exit-active {
    width:160px;
  }
`
export const Search = styled.input.attrs({
  type:'text',
  placeholder:'搜索',
})`
  width: 160px;
  height: 38px;
  padding: 0 40px 0 20px;
  color:#999;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  outline:none;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:240px;
  }
`