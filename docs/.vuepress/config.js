const themeConfig = require('./config/themeConfig')
const plugins = require('./config/plugins')
const head = require('./config/head')

module.exports = {
  theme: 'vdoing',
  title: "sm novel",
  description: 'sm,sm小说,,,,,小说,novel,拷问,捆绑,调教,鞭打,虐足,虐乳,道具,百合,涂上红红,狐妖小红娘,白龙少女',

  port: 5030,
  temp: './.temp',
  dest: './dist',

  shouldPrefetch: (e) => {
    return ``
  },

  head,
  themeConfig,
  plugins,

  markdown: {
    lineNumbers: false,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6']
  },

  extraWatchFiles: [
    // './config/themeConfig.js',
  ]
};
