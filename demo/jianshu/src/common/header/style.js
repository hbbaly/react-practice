import styled from 'styled-components'
import logoImg from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
  height:56px;
  border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  href:'/'
})`
  display:block;
  width:100px;
  height:56px;
  background:url(${logoImg});
  background-size:contain;

`