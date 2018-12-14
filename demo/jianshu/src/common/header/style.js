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
  margin:0 0 0 80px;
`
export const HeaderTitleItem = styled.div`
  position:relative;
  float: ${props => props.right?'right':'left'};
  padding:${props => !props.isSearch?'15px;':'9px 15px;'}
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
  .SearchSlide-enter{
    opacity:0
    transition all .2s ease-out;
  }
  .SearchSlide-enter-active{
    opacity:1
  }
  .SearchSlide-exit {
    transition all .2s ease-out;
  }
  .SearchSlide-exit-active {
    opacity:0
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
export const SearchInfo = styled.div`
  position:absolute;
  top:56px;
  left:15px;
  width:180px;
  padding:20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  border-radius:4px;
`
export const SearchTitleWrapper = styled.div`
  position:relative
  width:100%;
  height:30px;
  &:before{
    position:absolute;
    top:-30px;
    left:0px;
    content:'';
    width:0;
    height:0;
    border-width:0 10px 10px;
    border-style:solid;
    border-color:transparent transparent #fff;
  }
`
export const SearchTitle = styled.div`
    float: left;
    font-size: 14px;
    color: #969696;
`
export const SearchSwitch = styled.a`
  float: right;
  padding: 0;
  font-size: 13px;
  color: #969696;
  background-color: transparent;
  border-width: 0;
  .iconfont{
    display:block;
    float:left;
    font-size:14px;
    transition:all .3s ease-out;
    transform-origin:center center;
  }
`
export const SearchItem = styled.a`
  display: inline-block;
  margin-right: 10px;
  margin-bottom:5px;
  padding: 4px;
  font-size: 12px;
  line-height:12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  &:hover{
    color: #333;
    border-color: #b4b4b4;
  }
`
export const Login = styled.a`
  float: right;
  margin: 11px 6px 0 10px;
  font-size: 15px;
  line-height: 40px;
  cursor:pointer;
  color: #969696;
`
export const Register = styled(Login)`
  float: right;
  width: 80px;
  height: 38px;
  line-height: 24px;
  margin: 9px 5px 0 15px;
  font-size: 15px;
  color: #ec6149;
  text-align:center;
  line-height:38px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  border-color: #ec6149;
  background-color: rgba(236,97,73,.05);
`
export const Write = styled(Login)`
  float: right;
  width: 100px;
  height: 40px;
  margin: 8px 10px 0;
  line-height: 36px;
  border-radius: 20px;
  font-size: 15px;
  color: #fff;
  text-align:center;
  background-color: #ea6f5a;
  .iconfont{
    font-size:20px;
  }
`