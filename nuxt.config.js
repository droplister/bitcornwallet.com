module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Bitcorn Wallet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A web wallet that allows you to manage your Bitcorn card collection.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** App modules
  */
  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/font-awesome',
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Auth options
  */
  auth: {
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/wallet'
    },
    strategies: {
      local: false,
      mnemonic: { _scheme: '~/schemes/MnemonicScheme.js' }
    }
  },
  /*
  ** App router
  */
  router: {
    middleware: ['auth']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Code Vendors
     */
    vendor: ['bitcore-lib', 'bitcore-mnemonic'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
