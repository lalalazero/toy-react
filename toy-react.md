# toy-react 组件

react = 组件化 + jsx + vdom

vom:

0. react 1.0 的 feature ，vue 2.0 也引入
1. 消解重复操作（n次dom操作）
2. 做dom比较（不全量更新）


操作：
1. yarn init
2. yarn add webpack webpack-cli -D
3. yarn add babel-loader @babel/core @babel/preset-env -D
4. yarn add @babel/plugin-transform-react-jsx -D


实现拆解：
1. jsx 从 babel 转义为 ToyReact.createElement 
2. 挂载到真实的 dom 上（ document.body )
3. 处理 children 是字符串的情况
4. 自定义组件是怎么 render 的
5. 自定义组件处理 children
6. 自定义组件的 children 做类型兼容