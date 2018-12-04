import React from 'react';
import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux'
// import { createStore} from 'redux'
// import TodoApp from '../store/reducers'
import App from '../components/app'
// let store = createStore(TodoApp)

// ReactDOM.render(
//   <Provider store = {store}>
//     <App></App>
//   </Provider>,
//   document.getElementById("app")
// );

ReactDOM.render(
  <App></App>,
  document.getElementById("app")
);