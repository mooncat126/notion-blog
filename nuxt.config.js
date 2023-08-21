export default {
  ssr: true,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    routes: async () => {
      const notion = require('vue-notion')
      const pageTable = await notion.getPageTable(process.env.NOTION_TABLE_ID)
      return pageTable.filter((item) => !!item.public).map((item) => `/posts/${item.slug}`)
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.DEV_NAME,
    render: {
      csp: true
    },
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.DEV_DESCRIPTION},
      { name: 'format-detection', content: 'telephone=no' },
      /* Twitter */
      {hid: "twitter:card", name: "twitter:card", content: "summary"},
      {hid: "twitter:site", name: "twitter:site", content: process.env.DEV_NAME},
      {hid: "twitter:creator", name: "twitter:creator", content: process.env.DEV_NAME},
      {hid: "twitter:title", name: "twitter:title", content: process.env.DEV_NAME},
      {hid: "twitter:description", name: "twitter:description", content: process.env.DEV_DESCRIPTION},
      {hid: "twitter:image", name: "twitter:image", content: '/favicon.ico'},
      /* Open-Graph */
      {hid: "og:type", name: "og:type", content: "website"},
      {hid: "og:site_name", name: "og:site_name", content: process.env.DEV_NAME},
      {hid: "og:description", name: "og:description", content: process.env.DEV_DESCRIPTION},
      {hid: "og:image", name: "og:image", content: '/favicon.ico'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/live2d.js', body: true },
      {
        hid: 'google-analytics',
        src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`,
        async: true
      },
      {
        hid: 'gtag-init',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.GOOGLE_ANALYTICS_ID});
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },

  css: [],

  plugins: [
    "@/plugins/util",
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'vue-notion/nuxt',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/google-analytics'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
    'vue-notion/nuxt',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/google-analytics'
  ],

  build: {},
  render: {
    resourceHints: false,
    html: {
      minify: false
    }
  },
  colorMode: {
    preference: 'dark',
    classSuffix: ''
  },

  optimizedImages: {
    optimizeImages: true
  },

  // Sitemap Configuration: https://sitemap.nuxtjs.org/usage/sitemap-options#from-a-function-which-returns-a-promise
  sitemap: {
    hostname: process.env.BASE_URL,
    routes: async () => {
      const notion = require('vue-notion')
      const pageTable = await notion.getPageTable(process.env.NOTION_TABLE_ID)
      return pageTable.filter((item) => !!item.public).map((item) => `/posts/${item.slug}`)
    }
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    githubUsername: process.env.GITHUB_USERNAME,
    commentClientId: process.env.COMMENT_CLIENT_ID,
    commentClientSecrets: process.env.COMMENT_CLIENT_SECRETS,
    commentRepo: process.env.COMMENT_REPO,
    notionTableId: process.env.NOTION_TABLE_ID,
    notionAboutPageId: process.env.NOTION_ABOUT_PAGE_ID,
    devName: process.env.DEV_NAME,
    devDescription: process.env.DEV_DESCRIPTION,
    devRole: process.env.DEV_ROLE,
    devGithubLink: process.env.DEV_GITHUB_LINK,
    devTwitterLink: process.env.DEV_TWITTER_LINK,
    devLinkedinLink: process.env.DEV_LINKEDIN_LINK,
    devLogo: process.env.DEV_LOGO,
  },

}
