import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/index'
import Header from './common/header/index'
import {GlobalStyle} from './style'
import {IconStyle} from './statics/icon/iconfont'
import Index from './pages/index/index'
class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <GlobalStyle />
          <IconStyle />
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Index}></Route>
              <Route path='/detail' exact render={()=><div>detail</div>}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
