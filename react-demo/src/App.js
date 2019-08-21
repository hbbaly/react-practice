import React from 'react';
import './App.css';
const name = ''
function App() {
  if(name) {
    return (
      <div className="App">
        <h1> hello {name}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>hello world</h1>
        <div>desc</div>
      </div>
    )
  }
}

export default App;
