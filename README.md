[English](README.md) | [中文](README_zh.md)

# notion-blog
This is an example Next.js project that shows Nuxt.js' support using Notion's private API for a backend.
Deploy to netlify.

## Preview
https://xyu.house/

## Features

- minimal and clean portfolio
- the dark/light mode (Auto detect the system color-mode)
- responsive (tablet & mobile friendly)
- render articles from Notion 🚀
- fetches your Github pinned projects with most stars
- Eslint & Prettier configured
- google analytics integration
- generate sitemap (visit /sitemap.xml)
- one click deployment to netlify

## Prerequisites
create Notion account
duplicate this template by clicking on "duplicate" button located at the top of the page.

make your notion table public (by clicking on "share" button located at the top of the page)

grab the table id from the table link: eg:

- link: https://www.notion.so/xyblog/449c4b42aeb7409e9c02405c45d9f519?v=18afdb78dc8e4e03a727e994ac205a74
- id: 449c4b42aeb7409e9c02405c45d9f519

do the same thing for about page id (we gonna use it as an env variable NOTION_ABOUT_PAGE_ID)
get your Google analytics id (optional)
now you can click to the deploy button and fill the netlify form


## Build Setup
create a `.env` file with the following variables

- BASE_URL=[your domain]
- GOOGLE_ANALYTICS_ID= [xxxxx]
- NOTION_TABLE_ID="[xxxxx]"
- NOTION_ABOUT_PAGE_ID="[xxxxx]"
- GITHUB_USERNAME="[xxxxx]"
- DEV_LOGO="[xxxxx]"
- DEV_NAME="[xxxxx]"
- DEV_DESCRIPTION="some text"
- DEV_ROLE="Engineer"
- DEV_GITHUB_LINK="https://github.com/[xxx]"
- DEV_TWITTER_LINK="https://twitter.com/[xxx]"
- DEV_LINKEDIN_LINK="https://www.linkedin.com/in/[xxx]/"

then you can try to run it.

## install dependencies
```
$ yarn install
```

## serve with hot reload at localhost:3000
```
$ yarn dev
```

