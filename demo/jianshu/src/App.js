import React, { Component } from 'react';
import {GlobalStyle} from './style'
class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <header className="header-bg">
         hello world
        </header>
      </div>
    );
  }
}

export default App;
