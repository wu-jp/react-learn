# React生命周期

生命周期：组件从诞生到销毁会经历一系列的过程，该过程就叫做生命周期。React在组件的生命周期中提供了一系列的钩子函数（类似于事件），可以让开发者在函数中注入代码，这些代码会在适当的时候运行。

**生命周期仅存在于类组件中，函数组件每次调用都是重新运行函数，旧的组件即刻被销毁**

## 旧版生命周期

React < 16.0.0

1. constructor
   - 同一组件对象只会创建一次
   - 不能在第一次挂载到页面之前，调用setState，为了避免问题，构造函数中严禁使用setState
2. componentWillMount
   - 正常情况下，和构造函数一样，它只会运行一次
   - 可以使用setState，但是为了避免bug，不允许使用，因为在某些特殊情况下，该函数可能被调用多次
3. render
   - 返回一个虚拟DOM，会被挂载到虚拟DOM树中，最终渲染到页面的真实DOM中
   - render可能不只运行一次，只要需要重新渲染，就会重新运行
   - 严禁使用setState，因为可能会导致无限递归渲染
4. componentDidMount
   - 只会执行一次
   - 可以使用setState
   - 通常情况下，会将网络请求、启动计时器等一开始需要的操作，书写到该函数中
5. 组件进入活跃状态
6. componentWillReceiveProps
   - 即将接收新的属性值
   - 参数为新的属性对象
   - 该函数可能会导致一些bug，所以不推荐使用
7. shouldComponentUpdate
   - 指示React是否要重新渲染该组件，通过返回true和false来指定
   - 默认情况下，会直接返回true
8. componentWillUpdate
   - 组件即将被重新渲染
9. componentDidUpdate
   - 往往在该函数中使用dom操作，改变元素
10. componentWillUnmount
    - 通常在该函数中销毁一些组件依赖的资源，比如计时器


## 新版生命周期

React >= 16.0.0

React官方认为，某个数据的来源必须是单一的

1. getDerivedStateFromProps
   - 通过参数可以获取新的属性和状态
   - 该函数是静态的
   - 该函数的返回值会覆盖掉组件状态
   - 该函数几乎是没有什么用
2. getSnapshotBeforeUpdate
   - 真实的DOM构建完成，但还未实际渲染到页面中。
   - 在该函数中，通常用于实现一些附加的dom操作
   - 该函数的返回值，会作为componentDidUpdate的第三个参数