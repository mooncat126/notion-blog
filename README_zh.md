[English](README.md) | [中文](README_zh.md)

# notion-blog
这是一个示例的 Nuxt.js 个人博客项目， 使用了 Notion 的私有 API 作为后端的支持。可部署至 netlify。

## 预览

https://xyu.house/

## 特性

- 简洁版的功能组合
- 日/夜模式（自动检测系统颜色模式）
- 响应式（适配平板和手机）
- 从 Notion 渲染文章 🚀
- 获取你在 Github 上的项目信息
- 配置了 Eslint 和 Prettier
- 集成 Google 分析
- 生成站点地图（访问 /sitemap.xml）
- 一键部署到 netlify

## 准备工作

创建 Notion 账户
点击页面顶部的`duplicate`按钮复制此模板。

使你的 notion 表格公开（通过点击页面顶部的`share`按钮）

从表格链接获取表格 ID，例如：

- 链接：https://www.notion.so/xyblog/449c4b42aeb7409e9c02405c45d9f519?v=18afdb78dc8e4e03a727e994ac205a74
- ID：449c4b42aeb7409e9c02405c45d9f519

对于 about 页面的 ID 也执行同样的操作（我们将把它作为环境变量 NOTION_ABOUT_PAGE_ID）
获取你的 Google 分析 ID（可选）

## 设置

创建一个 `.env` 文件，并填入以下变量

- BASE_URL=[your domain]
- GOOGLE_ANALYTICS_ID
- NOTION_TABLE_ID
- NOTION_ABOUT_PAGE_ID
- GITHUB_USERNAME
- DEV_LOGO
- DEV_NAME
- DEV_DESCRIPTION
- DEV_ROLE
- DEV_GITHUB_LINK
- DEV_TWITTER_LINK
- DEV_LINKEDIN_LINK

然后你可以尝试运行它。

## 安装依赖

```
$ yarn install
```

## 在localhost:3000运行

```
$ yarn dev
```
## 部署
最后你可以按.env的内容填写 netlify 表格,并点击部署按钮进行发布。
https://www.netlify.com/
