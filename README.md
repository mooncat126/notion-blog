[English](README.md) | [中文](README_zh.md)

# notion-blog
This is an example Next.js project that shows Nuxt.js' support using Notion's private API for a backend.
Deploy to netlify.

## Preview
https://xyu.house/

## Features

### User Interface Features
- 🌤️ Dark/light mode support. 
- 📖 Renders blogs directly from Notion.
- 🔎 Search and tag functionality for blogs.
- 💻 Displays Github projects.
- 📫 Brief contact form.
- 👧 Cute live2D character with EN, ZH, JP support.

### Technical and Design Features
- Clean, minimalistic portfolio design.
- Fully responsive for all devices.  
- Configured with Eslint & Prettier.
- Google Analytics integrated.
- Generates sitemap at /sitemap.xml.


## Prerequisites
1. create Notion account

2. duplicate the following template by clicking on `"duplicate"` button located at the top of the page.
- https://www.notion.so/xyblog/449c4b42aeb7409e9c02405c45d9f519?v=c7483b41c8c34d77aed83c36bf500089

3. make your notion table public (by clicking on "share" button located at the top of the page)

4.grab the table id from the table link: eg:
- link: https://www.notion.so/xyblog/449c4b42aeb7409e9c02405c45d9f519?v=18afdb78dc8e4e03a727e994ac205a74
- id: 449c4b42aeb7409e9c02405c45d9f519

5. do the same thing for about page id (we gonna use it as an env variable `NOTION_ABOUT_PAGE_ID`)

6. get your Google analytics id (optional)
   
now you can run it or deploy it in your server.


## Build Setup
create a `.env` file with the following variables

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

then you can try to run it. 
## install dependencies
```
$ yarn install
```

## serve with hot reload at localhost:3000
```
$ yarn dev
```

