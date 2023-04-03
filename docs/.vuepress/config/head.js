// 基本配置

module.exports = [
  //fav icons，资源放在public文件夹
  ['link', { rel: 'shortcut icon', href: '/favicon.png' }],
  ['meta', { name: 'keywords', content: 'vuepress,theme,blog,vdoing' }],
  // 移动浏览器主题颜色
  // ['meta', { name: 'theme-color', content: '#11a8cd' }],

  // pwa
  ['link', { rel: 'manifest', href: '/manifest.json' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
]
