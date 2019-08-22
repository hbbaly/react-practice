# React

## 安装

```sh
npx create-react-app my-app
cd my-app
npm start
```
## hello react

`app.js`

```js
import React from 'react';
import './App.css';
const name = 'react
function App() {
  return (
    <div className="App">
      <h1> hello {name}</h1>
    </div>
  );
}

export default App;
```

## JSX

### 在 JSX 中嵌入表达式

```js
const name = 'react
function App() {
  return (
    <div className="App">
      <h1> hello {name}</h1>
    </div>
  );
}
```

### JSX 也是一个表达式

你可以在 `if` 语句和 `for` 循环的代码块中使用 `JSX`，将 `JSX` 赋值给变量，把 `JSX` 当作参数传入，以及从函数中返回 `JSX`

```js
function App() {
  if(name) {
    return (
      <div className="App">
        <h1> hello {name}</h1>
      </div>
    );
  } else {
    return (<h1>hello world</h1>)
  }
}
```

### JSX 特定属性

在属性中嵌入 `JavaScript` 表达式时，不要在大括号外面加上引号。你应该仅使用引号（对于字符串值）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号

你可以通过使用引号，来将属性值指定为字符串字面量：

```js
const element = <div tabIndex="0"></div>;
```

也可以使用大括号，来在属性值中插入一个 `JavaScript` 表达式：

```js
const element = <img src={user.avatarUrl}></img>;
```

### 使用 JSX 指定子元素

JSX 标签里能够包含很多子元素:

```js
return (
  <div>
    <h1>hello world</h1>
    <div>desc</div>
  </div>
)
```

### JSX 防止注入攻击

`React DOM` 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 `XSS`（`cross-site-scripting`, 跨站脚本）攻击。

## 元素渲染

### 将一个元素渲染为 DOM

想要将一个 `React` 元素渲染到根 `DOM` 节点中，只需把它们一起传入 `ReactDOM.render()`

```js
ReactDOM.render(<App />, document.getElementById('root'));
```

### 更新已渲染的元素

```js
import React, { Component } from 'react';
class Clock extends Component {
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
export default Clock
```

### 只更新它需要更新的部分

上例中加上

```js
import React, { Component } from 'react';
class Clock extends Component {
  constructor(){
    super()
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }
  componentDidMount(){
    setInterval(()=> {
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000)
  }
  render(){
    return(
      <div>
        <h2>It is {this.state.time}</h2>
      </div>
    )
  }
}
export default Clock
```

查看DOM元素，可以看到每次只渲染需要改变的，尽管每一秒我们都会新建一个描述整个 UI 树的元素，

React DOM 只会更新实际改变了的内容。