[English](README.md) | [中文](README_zh.md)

# Notion博客
这是一个示例Next.js项目，展示了Nuxt.js使用Notion私有API作为后端的支持。
可以部署到netlify。

## 预览
https://xyu.house/

## 特性

### 用户界面特性
- 🌤️ 支持日/夜切换模式。
- 📖 直接从Notion渲染博客。
- 🔎 博客的搜索和标签功能。
- 💻 展示Github项目。
- 📫 简洁的联系表单。
- 👧 支持EN，ZH，JP的可爱live2D角色。

### 技术和设计特性
- 清爽，极简的UI设计。
- 完全响应式。
- 已配置Eslint和Prettier。
- 集成Google Analytics。
- 自动生成网站地图。

## 准备工作
1. 创建Notion账户

2. 点击页面顶部的` "duplicate" `按钮复制下面的模板。
- https://www.notion.so/xyblog/449c4b42aeb7409e9c02405c45d9f519?v=c7483b41c8c34d77aed83c36bf500089

3. 使你的Notion表格公开（点击页面顶部的 "share" 按钮）

4. 从表格链接中获取表格id，例如：
- 链接：https://www.notion.so/xyblog/449c4b42aeb7409e9c02405c45d9f519?v=18afdb78dc8e4e03a727e994ac205a74
- id：449c4b42aeb7409e9c02405c45d9f519

5. 相同步骤设置About页面id（我们会把它作为环境变量 `NOTION_ABOUT_PAGE_ID`）

6. 获取你的Google analytics id（可选）

现在你可以进行下一步了。:)

## 设置环境参数
创建一个`.env`文件，包含以下变量

```
BASE_URL=<your_base_url>
GOOGLE_ANALYTICS_ID=<your_google_analytics_id>
NOTION_TABLE_ID=<your_notion_table_id>
NOTION_ABOUT_PAGE_ID=<your_notion_about_page_id>
GITHUB_USERNAME=<your_github_username>
DEV_LOGO=<your_dev_logo>
DEV_NAME=<your_dev_name>
DEV_DESCRIPTION=<your_dev_description>
DEV_ROLE=<your_dev_role>
DEV_GITHUB_LINK=<your_dev_github_link>
DEV_TWITTER_LINK=<your_dev_twitter_link>
DEV_LINKEDIN_LINK=<your_dev_linkedin_link>
```

然后你可以尝试运下面的步骤运行它。

## 安装依赖
```
$ yarn install
```

## 启动预览 localhost:3000 
```
$ yarn dev
```
