# Redux-Action

> Action是把数据从应用传到store的有效荷载。它是store数据的唯一来源。一般通过store.dispatch()将action传到store


Action的特征：

1. action它是一个平面对象（plain-object）
    1. 它的__proto__指向Object.prototype
2. 通常，使用payload属性表示附加的属性值（没有强制要求）
3. action中必须有type属性，该属性用于描述操作的类型
    1. 但是，没有对type的类型做出要求
4. 在大型项目中，由于操作类型非常多，为了避免硬编码（hard code）,会将action的类型存放到一个或一些单独的文件中（样板代码）。
5. 为了方便传递action，通常会使用action创建函数（action creator）来创建action
    1. action创建函数应为无副作用的纯函数
        1. 不能以任何形式修改参数
        2. 不可以异步
        3. 不可以对外部环境变量造成影响
6. 为了方便action创建并分发action，redux提供一个函数bindActionCreators，该函数用于增强action创建函数的功能，使它不仅可以创建action，并且创建后会自动完成一次分发。
