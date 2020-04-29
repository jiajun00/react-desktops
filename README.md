# 大数据平台之Portal

## 项目介绍
long long ago 在公司做了一个大数据平台的应用管理中心，用来管理展示数据相关的应用、统一数据中心访问入口
多年过去后仍有也已离职的同事问起，只可惜已无源码（只留局部图片）。

当时使用的ExtJS开发类似Windows系统桌面，恰遇react-desktops项目与原来项目UI相近，基于此再做一般，也算是对当前系统的升级重构

感谢500.com的数据平台组，我在哪里更深入的理解了数据处理接触学习了大数据，才有能力跳槽
500.com一个神奇的网站　若不是互联网彩票被叫停，我们应该还在一起快乐的玩耍
感谢
### 前端技术栈
- react
- webpack
- react-desktop
- redux
- react-router

### 后端技术栈
- Java
- Spring
- Mysql


## 安装部署运行
```
// 下载源码
git clone https://github.com/jiajun00/react-desktops

// 安装运行环境
npm install

// 为了方便调试redux在chrome浏览器中安装Redux DevTools（在谷歌应用商店下载redux-devtools）

// 项目运行
npm run start

// 项目打包(注：用于生产环境时请关闭Redux DevTools配置分别位于'/src/mac/store/index.js'和'/src/windows/store/index.js'中)
npm run build
```
