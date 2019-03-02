# 桌面系统
![](https://img.shields.io/badge/react_desktops-0.2.1-green.svg)
![](https://img.shields.io/badge/build-passing-yellow.svg)
![](https://img.shields.io/badge/language-javascript-red.svg)
![](https://img.shields.io/badge/license-MIT-000000.svg)
![](https://img.shields.io/badge/ECMAScipt-6-orange.svg)

## 项目介绍
react-desktops是基于react-desktop基础上，封装桌面操作系统前端UI，用了丰富的mac和win10桌面元素，包括桌面图标、窗口化子页面管理、开始菜单等组件，兼容主流现代浏览器。
适合快速开发后台管理系统的前端界面、整合企业诸多应用、通过B/S架构集成系统、可作为企业级应用管理平台。

### 技术栈
- react
- webpack
- react-desktop
- fusion-design
- redux
- react-router

### 版本
稳定版 
你可以订阅：https://github.com/jiajun00/react-desktops 来获得稳定版发布的通知。

### 使用文档
[查看文档](http://showdoc.qqxio.cn/web/#/1?page_id=1)
访问密码：desktops

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

## 运行截图
### Mac风格桌面
路由：/mac

![image](https://react-desktop.oss-cn-shenzhen.aliyuncs.com/demo/mac-home.png)

![image](https://react-desktop.oss-cn-shenzhen.aliyuncs.com/demo/mac-finder-file.png)

![image](https://react-desktop.oss-cn-shenzhen.aliyuncs.com/demo/mac-finder-list.png)

![image](https://react-desktop.oss-cn-shenzhen.aliyuncs.com/demo/mac-lanpach.png)


### Windows风格桌面
路由：/win

![image](https://react-desktop.oss-cn-shenzhen.aliyuncs.com/demo/win-home.png)

![image](https://react-desktop.oss-cn-shenzhen.aliyuncs.com/demo/win-system.png)

## 在线演示
[演示地址](http://desk.qqxio.cn)

## Learn More

redux-devtools [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension).

fusion design [官网地址](https://fusion.design/).

react-router [官网地址](https://reacttraining.com/react-router/web/guides/quick-start).

create-react-app [文档地址](https://www.html.cn/create-react-app/docs/documentation-intro/)