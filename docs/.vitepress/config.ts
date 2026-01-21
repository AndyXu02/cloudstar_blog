import { defineConfig } from 'vitepress'

const basePath = (globalThis as any)?.process?.env?.BASE_PATH || '/'

export default defineConfig({
  lang: 'zh-CN',
  title: 'CloudStar 装机文档',
  description: 'DIY 电脑网店技术文档',
  base: basePath,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '装机指南', link: '/guide/' },
      { text: '售后与保修', link: '/after-sales/' },
      { text: 'FAQ', link: '/faq/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '装机指南',
          items: [{ text: '概览', link: '/guide/' }]
        }
      ],
      '/after-sales/': [
        {
          text: '售后与保修',
          items: [{ text: '政策与流程', link: '/after-sales/' }]
        }
      ],
      '/faq/': [
        {
          text: 'FAQ',
          items: [{ text: '常见问题', link: '/faq/' }]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/' }],
    footer: {
      message: '本文档用于客户自助查阅',
      copyright: 'Copyright ©'
    }
  }
})
