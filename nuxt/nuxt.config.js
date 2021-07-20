export default {

  server: {
    host: '0.0.0.0'
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  //ssr: false,
	mode: 'universal',

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '三郷交通',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'description', content: "埼玉県三郷市でタクシー呼ぶ。TEL:048-952-3310 三郷駅、三郷中央駅、新三郷、ららぽーと、病院などどこへでも。"},
      { name: "keywords", content: "三郷,タクシー,三郷タクシー,三郷交通,三郷駅,求人"},
      { name: "author", content: "misato-taxi"},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'},
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js'},
      { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'},
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js'},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //'@/plugins/utils.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/google-gtag',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  'google-gtag': {
    id: 'UA-43152705-1',
    debug: true, // Enable to track in dev mode.
  },
}
