module.exports = {
  head: {
    title: 'Wouter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '//app.storyblok.com/f/storyblok-latest.js' }
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },
  css: [
    '~/assets/scss/app.scss'
  ],
  plugins: [
    '~/plugins/components',
    '~/plugins/storyblok'
  ]
}
