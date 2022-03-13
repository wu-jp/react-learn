# Redux核心基础

> 此分支不涉及任何代码

## 传统MVC模式

它是一个UI解决方案，用于降低UI及UI管理的数据的复杂度。

传统服务器的MVC：

![](public\md-images\2019-08-20-13-18-58.png)

环境：
1. 服务端需要响应一个完整的HTML
2. 该HTML中包含页面需要的数据
3. 浏览器仅承担渲染页面的作用

以上的这种方式叫做**服务端渲染**，即服务器端将完整的页面组装好之后，一起发送给客户端。

服务器端需要处理UI中要用到的数据，并且要将数据嵌入到页面中，最终生成一个完整的HTML页面响应。

为了降低处理这个过程的复杂度，出现了MVC模式。

![](public\md-images\2019-08-20-13-29-14.png)

**Controller**: 处理请求，组装这次请求需要的数据
**Model**：需要用于UI渲染的数据模型
**View**：视图，用于将模型组装到界面中

**前端MVC模式的困难**

React解决了   数据 -> 视图   的问题

1. 前端的controller要比服务器复杂很多，因为前端中的controller处理的是用户的操作，而用户的操作场景是复杂的。
2. 对于那些组件化的框架（比如vue、react），它们使用的是单向数据流。若需要共享数据，则必须将数据提升到顶层组件，然后数据再一层一层传递，极其繁琐。 虽然可以使用上下文来提供共享数据，但对数据的操作难以监控，容易导致调试错误的困难，以及数据还原的困难。并且，若开发一个大中型项目，共享的数据很多，会导致上下文中的数据变得非常复杂。

比如，上下文中有如下格式的数据：

```js
value = {
    users:[{},{},{}],
    addUser: function(u){},
    deleteUser: function(u){},
    updateUser: function(u){}
}
```

## 前端需要一个独立的数据解决方案

传统的服务端mvc模式，客户端用户进行操作，通过请求分发到服务端不同的controller，再通过model层处理数据，view层组装数据，最后返回一个新的页面，完成一次用户操作。

这样的模式对于前端mvc来说过于复杂，因为用户的操作场景非常复杂。

**React解决了数据→ 视图的问题**

1. 前端的controller要比服务器渲染复杂很多，因为前端中的controller处理的用户的操作，而用户的操作场景是复杂的。
2. 对于那些组件化的框架（如vue、react），他们使用的是单向数据流。如需要数据共享，则必须将数据提升到顶层组件，然后一层一层的传递，及其繁琐。虽然可以使用上下文来提供共享数据，但对数据的操作性难以掌控，容易导致调试错误的困难，以及数据还原的困难。并且，若在大型项目中，共享的数据很多，会导致上下文的数据非常复杂。

**Flux**

Facebook提出的数据解决方案，它的最大历史意义，在于它引入了action的概念

action是一个普通的对象，用于描述要干什么。**action是触发数据变化的唯一原因**

store表示数据仓库，用于存储共享数据。还可以根据不同的action更改仓库中的数据

示例：

```js
var loginAction = {
    type: "login",
    payload: {
        loginId:"admin",
        loginPwd:"123123"
    }
}
var deleteAction = {
    type: "delete",
    payload: 1  // 用户id为1
}
```

**Redux**

在Flux基础上，引入了reducer的概念

reducer：处理器，用于根据action来处理数据，处理后的数据会被仓库重新保存。

![](public/md-images/2019-08-20-14-23-05.png)