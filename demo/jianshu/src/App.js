import React, { Component } from 'react';
import Header from './common/header/index'
import {GlobalStyle} from './style'
import {IconStyle} from './statics/icon/iconfont'
class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <IconStyle />
        <Header />
      </div>
    );
  }
}

export default App;
