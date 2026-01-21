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
      { text: '教程', link: '/tutorial/' }
    ],
    sidebar: {
      '/tutorial/': [
        {
          text: '教程',
          items: [
            { text: '教程总览', link: '/tutorial/' },
            { text: '系统激活', link: '/tutorial/activation' },
            { text: '重做系统', link: '/tutorial/reinstall' },
            { text: '故障排查', link: '/tutorial/troubleshooting' }
          ]
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
