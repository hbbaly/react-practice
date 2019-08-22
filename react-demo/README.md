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

## 组件 & Props

### 函数组件

该函数是一个有效的 `React` 组件，因为它接收唯一带有数据的 `“props”`（代表属性）对象与并返回一个 `React` 元素。这类组件被称为“函数组件”
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### class组件

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### 组合组件

可以创建一个可以多次渲染 `Welcome` 组件的 `App` 组件

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

### Props 的只读性

组件无论是使用函数声明还是通过 `class` 声明，都决不能修改自身的 `props`.

有 React 组件都必须像纯函数一样保护它们的 props 不被更改。


## State & 生命周期

还是时钟例子：

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
    this.timeId = setInterval(()=> {
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000)
  }
  componentWillUnmount(){
    clearInterval(this.timeId)
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

当 `Clock` 的输出被插入到 `DOM` 中后， `React` 就会调用 `ComponentDidMount()` 生命周期方法。在这个方法中，`Clock` 组件向浏览器请求设置一个计时器来每秒调用一次组件的 `tick()` 方法。

浏览器每秒都会调用一次 `tick()` 方法。 在这方法之中，`Clock` 组件会通过调用 `setState()` 来计划进行一次 `UI` 更新。得益于 `setState()` 的调用，`React` 能够知道 `state` 已经改变了，然后会重新调用 `render()` 方法来确定页面上该显示什么。这一次，`render()` 方法中的 `this.state.time` 就不一样了，如此以来就会渲染输出更新过的时间。`React` 也会相应的更新 `DOM`。

一旦 `Clock` 组件从 `DOM` 中被移除，`React` 就会调用 `componentWillUnmount()` 生命周期方法，这样计时器就停止了。


### 不要直接修改 State

使用`this.setState`来修改

```js
this.setState({time: new Date().toLocaleTimeString()});
```

### State 的更新可能是异步的

**出于性能考虑，`React` 可能会把多个 `setState()` 调用合并成一个调用。

因为 `this.props` 和 `this.state` 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。**

```js
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

### State 的更新会被合并

当你调用 `setState()` 的时候，`React` 会把你提供的对象合并到当前的 `state`。

### 数据是向下流动的

这通常会被叫做“自上而下”或是“单向”的数据流。任何的 `state` 总是所属于特定的组件，而且从该 `state` 派生的任何数据或 `UI` 只能影响树中“低于”它们的组件。

如果你把一个以组件构成的树想象成一个 `props` 的数据瀑布的话，那么每一个组件的 `state` 就像是在任意一点上给瀑布增加额外的水源，但是它只能向下流动。


## 事件处理

`React` 元素的事件处理和 `DOM` 元素的很相似，但是有一点语法上的不同:

- `React` 事件的命名采用小驼峰式（`camelCase`），而不是纯小写。
- 使用 `JSX` 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

```js
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

在 `React` 中另一个不同点是你不能通过返回 `false` 的方式阻止默认行为。你必须显式的使用 `preventDefault` 。

```js
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

当你使用 `ES6 class` 语法定义一个组件的时候，通常的做法是将事件处理函数声明为 `class` 中的方法。

```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

你必须谨慎对待 `JSX` 回调函数中的 `this`，在 `JavaScript` 中，`class` 的方法默认不会绑定 `this`。如果你忘记绑定 `this.handleClick` 并把它传入了 `onClick`，当你调用这个函数的时候 `this` 的值为 `undefined`。

这并不是 `React` 特有的行为；这其实与 `JavaScript` 函数工作原理有关。通常情况下，如果你没有在方法后面添加 `()`，例如 `onClick={this.handleClick}`，你应该为这个方法绑定 `this`。

如果觉得使用 `bind` 很麻烦，这里有两种方式可以解决。如果你正在使用实验性的 `public class fields` 语法，你可以使用 `class fields` 正确的绑定回调函数

```js
class LoggingButton extends React.Component {
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

如果你没有使用 class fields 语法，你可以在回调中使用箭头函数

```js
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
```

### 向事件处理程序传递参数

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

## 条件渲染

`React` 中的条件渲染和 `JavaScript` 中的一样，使用 `JavaScript` 运算符 `if` 或者条件运算符去创建元素来表现当前的状态，然后让 `React` 根据它们来更新 `UI`。

```js
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```

### 与运算符 &&

```js
return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
```

### 三目运算符

```js
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

也可以用于较为复杂的表达式中

```js
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
    </div>
  );
}
```

### 阻止组件渲染

在极少数情况下，你可能希望能隐藏组件，即使它已经被其他组件渲染。若要完成此操作，你可以让 `render` 方法直接返回 `null`，而不进行任何渲染。

```js
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}
```

## 列表 & Key

### 渲染多个组件

使用 `Javascript` 中的 `map()` 方法来遍历 `numbers` 数组。将数组中的每个元素变成 `<li>` 标签，最后我们将得到的数组赋值给 `listItems`

```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
```

### 基础列表组件

```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

### key

`key` 帮助 `React` 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。

一个元素的 `key` 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用来自数据 `id` 来作为元素的 `key`.

```js
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

当元素没有确定 `id` 的时候，万不得已你可以使用元素索引 ``index 作为 `key`


```js
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。可以看看 `Robin Pokorny 的深度解析使用索引作为 key 的负面影响` 这一篇文章。如果你选择不指定显式的 `key` 值，那么 `React` 将默认使用索引用作为列表项目的 `key` 值。

### 在 JSX 中嵌入 map()

```js
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />

      )}
    </ul>
  );
}
```

## 状态提升

通常，多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。

在 `React` 应用中，任何可变数据应当只有一个相对应的唯一“数据源”。通常，`state` 都是首先添加到需要渲染数据的组件中去。然后，如果其他组件也需要这个 `state`，那么你可以将它提升至这些组件的最近共同父组件中。你应当依靠自上而下的数据流，而不是尝试在不同组件间同步 `state`。

## 组合 vs 继承

### 包含关系

有些组件无法提前知晓它们子组件的具体内容。在 `Sidebar`（侧边栏）和 `Dialog`（对话框）等展现通用容器（`box`）的组件中特别容易遇到这种情况。

我们建议这些组件使用一个特殊的 `children prop` 来将他们的子组件传递到渲染结果中.

```js
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```

这使得别的组件可以通过 `JSX` 嵌套，将任意组件作为子组件传递给它们.

```js
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```

`<FancyBorder> JSX` 标签中的所有内容都会作为一个 `children prop` 传递给 `FancyBorder` 组件。因为 `FancyBorder` 将 `{props.children}` 渲染在一个 `<div>` 中，被传递的这些子组件最终都会出现在输出结果中。

你可能需要在一个组件中预留出几个“洞”。这种情况下，我们可以不使用 `children`，而是自行约定：将所需内容传入 `props`，并使用相应的 `prop`。

```js
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
```

