export default {

  server: {
    host: '0.0.0.0'
  },

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
      { name: "author", content: "misato-taxi" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://misato-taxi.jp/' },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "三郷交通",
          "image": "https://misato-taxi.jp/image/emblem.png",
          "description": "埼玉県三郷市でタクシーサービスを提供しています。",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "埼玉県三郷市新和３－１４７",
            "postalCode": "341-0034",
            "addressLocality": "三郷市",
            "addressRegion": "埼玉県",
            "addressCountry": "JP"
          },
          "telephone": "048-952-3310",
          "url": "https://misato-taxi.jp",
          "sameAs": []
        })
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css',
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
    '@nuxtjs/gtm',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  gtm: {
    id: 'GTM-MBND75W',
    pageTracking: true,
    enabled: true
  }
}
