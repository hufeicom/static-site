> 一些H5页面

## 目录结构说明
- \_\_test__ 
- build     项目构建配置文件
- src       项目源码
    - components
        - common 无业务逻辑组件
        - widget 带业务逻辑组件
    - page   页面入口
        - PageA
            - index.js
            - index.html
            - index.scss
        - PageB
            - index.js
            - index.html
            - index.scss
- package.json
- README.md
- tsconfig.json   TypeScript编译配置文件



关于项目的一些说明：

1. page目录下存放每个页面的入口文件，文件名以`index.js`结尾， 入口文件不推荐写过重的业务的逻辑（代码行数不超过50~100行）
2. 每个模块中都注入了变量 `GP`， `GP`的实现在`src/page/layout.js`中
3. ~~jQuery被注入全局当中~~


## TODO
- [x]  config title, 解决方法 ：提供方法 `GP.setTitle(str)`
- [x]  axios
- [-]  typescript
    - [ ] type definition file
    - [-] tslint
- [-]  mockjs
- [ ]  loading
- [ ]  button
- [ ]  page base style
- [ ]  jsBridge center
