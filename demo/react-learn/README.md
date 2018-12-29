# react-learn

## 安装

npm install

## 知识

 - 生命周期



        componentWillMount   // 组件挂载之前

        render  //  组件挂载

        componentDidMount   // 组件挂载之后

        componentWillReceiveProps  // props 发生改变的时候触发

        shouldComponentUpdate  // 组件是否更新

        componentWillUpdate  // 组件将要更新

        componentDidUpdate  // 组件已经更新

        componentWillUnmout  // 组件将被卸载


    **`componentWillReceiveProps`**  :  props 发生改变调用  在组件从父组件接受参数的时候，并且这个组件已经存在父组件中，父组件render重新执行的时候都会触发componentWillReceiveProps执行，如果是第一次存在与父组件中,componentWillReceiveProps是不会执行的。

    **`componentWillReceiveProps`**  :  return true组件会重新渲染，false阻止重新渲染
