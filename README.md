# News-box-mobile
-  ZJU BS架构课程大作业，各大新闻网站的新闻整合平台
-  <a href="https://github.com/crcrcry/News-box">News-box</a> IOS移动端

## 技术栈
- 前端
    - 框架：React Native
    - UI库：Ant Design Mobile

- 后端
    - 框架：Express
    - 数据库：Mysql


## React-Native 排坑
- 文件名用 .js，.jsx 会打包失败。
- 关于安装
	- 官方说法是：“执行下列两条安装指令之后，还需要新建一个 .babelrc 文件。”

	```
	$ npm install antd-mobile --save
	$ npm install babel-plugin-import --save-dev

	// .babelrc
	{
	  "presets": ["react-native"],
	  "plugins": [["import", { "libraryName": "antd-mobile" }]]
	}
	```
	- 没太搞懂 babel-plugin-import 有啥用，也没搞懂这个 .babelrc 有啥用。没有好像也没啥大碍？
	- 看了下官方给的 demo，的确是这么写了，但是官方 demo 是五个月前的版本，也许现在改进了，已经不需要 babel-plugin-import 了，RN 支持原生 import 了。
	- 但最好还是用着吧。
- 关于网络上的图片的引入
	- 需要手动设定尺寸。
	- 使用 https 以满足iOS App Transport Security 的要求。
- fetch API 发起 ajax
	- 同网络上的图片引入，需要用 https 来满足 IOS App 传输安全的要求。
- 对于触碰事件
	- \<View>、\<Text> 等不含有 onPress 属性的标签，可通过被 <TouchableHighligh> 等标签包裹来实现触摸事件。
- 关于动画性能
	- 切屏动画卡顿，**尚不知道怎么解决。**

## Antd-Mobile 排坑
- tabs 组件的 tabpane 下面不能用 view，渲染不出来，可以用 listview