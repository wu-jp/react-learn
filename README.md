# PureComponent

纯组件，用于避免不必要的渲染（运行render函数），从而提高效率

优化：如果一个组件的属性和状态，都没有发生变化，重新渲染该组件是没有必要的

PurcComponent是一个React提供的组件，如果某个组件继承自该组件，则该组件shouldComponentUpdate会进行优化，对属性和状态进行浅比较，如果相等则不会重新渲染。

注意：

1. PureComponent进行浅比较
    1. 为了提高效率，应尽量使用PureComponents
    2. 要求在组件中不要改动之前的状态，永远是创建一个新的状态来覆盖之前的状态（Immutable，不可变对象）
    3. 有一个第三方JS库，Immutable.js，它专门用于制作不可变对象
2. 函数组件，使用React.memo函数制作纯组件（这里一个React提供的高阶组件）