# 好记性记账本

## 目录结构

```
|-- pages/                    # 所有页面写在这个目录下面
  |-- index/
    |-- index.js              # 写 js 的
    |-- index.json            # 当前页配置文件
    |-- index.wxml            # 写 html 的
    |-- index.wxss            # 写 css 的
|-- README.md                 # 说明文档
|-- app.js                    # 用不上
|-- app.json                  
|-- project.config.json       # 工程配置文件，基本上用不上
```

## 2018年11月5日

- 怎么建页面
  在 app.json 中可以快速建页面 
  数组的第一项就是首页

- 怎么从一个页面跳转到另一个页面
  <button bindtap="handleGoTest">跳转到测试页面</button>   
        这里的 bindtap 就相当于 html 里面的 onclick
        handleGoTest  就是处理方法，写在 js 文件里
  wx 对象在微信小程序中的作用就相当于在浏览器中 window 的作用，是个全局对象，直接用它方法就行
    它有哪些方法，查看地址：https://developers.weixin.qq.com/miniprogram/dev/api/

- 认识页面
  一个页面由四个文件组成
  |-- index/
    |-- index.js              # 写 js 的
    |-- index.json            # 当前页配置文件
    |-- index.wxml            # 写 html 的
    |-- index.wxss            # 写 css 的
  html 用的标签 input, div在小程序里有自己的标签名，div 用 view 替代
  怎么知道小程序里有哪些标签呢？？https://developers.weixin.qq.com/miniprogram/dev/component/
  写 wxss 时候有一点需要注意，单位用 rpx，别用 px。1px = 2rpx 

- 整底部 tab

- 关于数据
  获取数据     this.data.message
  设置数据     this.setData({ message: 'xxx' })

  ## 2018年11月6日

  把记账本首页写出来，单纯写 html 和 css，页面功能可以先不写

  首页不知
  道怎么写？在手机小程序搜【记账本】关键字，看看别人首页怎么写的，模仿着写出来。