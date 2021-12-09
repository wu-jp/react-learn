# HOC（高阶组件）

HOF：Higher Order Function，高阶函数，以函数作为参数，并返回一个函数
HOC：Higher Order Component，高阶组件，以组件作为参数，并返回一个组件

> HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。

具体而言，**高阶组件是参数为组件，返回值为新组件的函数**。

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```


通常，可以利用HOC实现横切关注点。

举例：20个组件，每个组件在创建组件和销毁组件时，需要作日志记录 20个组件，它们需要显示一些内容，得到的数据结构完全一致

注意:
1. 不要在render中使用高阶组件
2. 不要在高阶组件内部更改传入的组件