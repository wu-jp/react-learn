# 手写相关api

## createStore

返回一个对象：

dispatch：分发一个action
getState：得到仓库中当前的状态
subscribe：注册一个监听器，监听器是一个无参函数，该分发一个action之后，会运行注册的监听器。该函数会返回一个函数，用于取消监听

## combineReducers

组装reducers，返回一个reducer，数据使用一个对象表示，对象的属性名与传递的参数对象保持一致

## bindActionCreators

自动分发action的函数，返回一个和该函数第一个参数的对象key名称相同的对象