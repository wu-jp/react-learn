# Redux-Store

store：用于保存数据

通过createStore方法创建的对象

store就是把action和reducers联系起来的对象。store的职责：

- 维持应用的state
- 提供getState()方法获取state
- 提供dispatch(action)方法分发action更新state
- 通过subscribe(listener)方法注册监听器
- 通过subscribe(listener)返回的函数注销监听函数

> 一个Redux应用只有一个单一的store。当需要拆分数据处理逻辑时，你应该使用reducer组合而不是创建多个store。
>