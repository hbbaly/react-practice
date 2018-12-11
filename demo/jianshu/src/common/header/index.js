import React from 'react'
import {JianShuHeader,HeaderWrapper,Logo,HeaderContent,HeaderTitleItem} from './style'
// const titleItem = [
//   {
//     icon:''
//   }
// ]
export default class Header extends React.Component{
  render(){
    return(
      <JianShuHeader>
        <HeaderWrapper>
          <Logo />
          <HeaderContent >
            <HeaderTitleItem color>
              <i className="iconfont">&#xe629;</i>
              发现
            </HeaderTitleItem>
          </HeaderContent>
        </HeaderWrapper>
      </JianShuHeader>
    )
  }
}