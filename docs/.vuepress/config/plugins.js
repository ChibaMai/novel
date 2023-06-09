// 插件配置
const dayjs = require('dayjs')

module.exports = [
  // 鼠标点击爱心特效
  // [require('./plugins/love-me'), {
  // 爱心颜色，默认随机色
  //   color: '#11a8cd',
  // 要排除元素的class, 默认空''
  //   excludeClassName: 'theme-vdoing-content'
  // }],

  // 全文搜索
  ['fulltext-search'],

  ['@vuepress/plugin-clean-urls'],

  // 顶部阅读实时进度插件
  ['reading-progress'],

  // 页面切换加载进度条
  [
    '@vuepress/plugin-nprogress',
    {
      lang: 'zh-CN',
    },
  ],

  [
    'vuepress-plugin-reading-time',
    {
      excludes: ['/about'], // 排除不需要计算的页面
      // 配置可选参数
      wordPerminute: 300, // 预计每分钟阅读字数
      showReadingTime: true, // 是否在文章中显示预计阅读时间
      showWordCount: true, // 是否在文章中显示字数
      format: '{time} 分钟阅读' // 自定义阅读时间格式
    }
  ],

  // pwa
  [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: true
    }
  ],

  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }
  ],

  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }
  ],

  [
    'vuepress-plugin-zooming',
    // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)',
      options: {
        bgColor: 'rgba(0,0,0,0.6)'
      },
    },
  ],

  [
    // "上次更新"时间格式
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        // https://day.js.org/
        return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
      },
    }
  ],

  // 自定义组件
  [
    {
      name: 'custom-plugins',
      globalUIComponents: ['Test']
    }
  ]
]
