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
  display:inline-block;
  padding:15px;
  line-height:26px;
  color: ${props => props.color ? ' #ea6f5a;' : '#333;'};
  cursor:pointer;
  .iconfont{
    margin-right:5px;
    font-size:26px;
    vertical-align: bottom;
  }
`