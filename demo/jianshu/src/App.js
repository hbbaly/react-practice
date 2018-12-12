import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './store/index'
import Header from './common/header/index'
import {GlobalStyle} from './style'
import {IconStyle} from './statics/icon/iconfont'
class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <GlobalStyle />
          <IconStyle />
          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;
