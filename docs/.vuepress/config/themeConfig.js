const nav = require('./nav')
const sidebar = require('./sidebar')

module.exports = {
  nav,

  // 以下配置是Vdoing主题改动的和新增的配置
  sidebar,

  // 背景
  // bodyBgImg: "/back.png",

  // 初始状态是否打开侧边栏
  sidebarOpen: true,
  sidebarDepth: 2,
  logo: '',
  repo: 'ChibaMai',
  searchMaxSuggestions: 20,
  lastUpdated: 'Last update',
  // 编辑的文件夹
  docsDir: 'docs',
  editLinks: true,
  editLinkText: 'Edit',
  // 最近更新栏
  updateBar: {
    showToArticle: false,
  },
  category: true,
  tag: true,
  author: {
    name: 'ChibaMai',
    href: 'https://github.com/ChibaMai'
  },
  // 文章内容块的背景底纹
  contentBgStyle: 6,
  // 社交图标，显示于博主信息栏和页脚栏
  social: {
    icons: [
      { iconClass: 'icon-youjian', title: '发邮件', link: 'mailto:lwmwll691@gmail.com' },
      { iconClass: 'icon-github', title: 'GitHub', link: 'https://github.com/ChibaMai' },
      { iconClass: 'icon-erji', title: '听音乐', link: 'https://music.163.com/#/playlist?id=755597173' }
    ]
  },
  // 页脚
  footer: {
    createYear: 2023,
    copyrightInfo: 'ChibaMai | MIT License'
  }
}
