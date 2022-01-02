# Portals

<aside>
💡  插槽（与vue的插槽完全不同）
</aside>

插槽：将一个React元素渲染到指定的DOM容器中。
ReactDOM.createPortal(React元素，真实的DOM)，该函数返回一个React元素。

注意**事件冒泡**

1. React中的事件是被包装过的
2. 它的事件冒泡是**根据虚拟DOM树来冒泡**的，与真实的DOM树无关。