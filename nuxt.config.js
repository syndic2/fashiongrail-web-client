console.log('env: ', process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fashiongrail',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/helpers.ts',
    '~/plugins/axios-accessor.ts',
    '~/plugins/vue-fragment.ts',
    '~/plugins/vue-slick-carousel.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    //'nuxt-vite'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    [ '@nuxtjs/dotenv', {
        path: 'environments',
        filename: process.env.NODE_ENV === 'PRODUCTION' ? '.env.production' : '.env.development'
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  },

  // TailwindCSS
  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css',
    configPath: '~/config/tailwind.config.js'
  },

  fontawesome: {
    icons: {
      solid: ['faStar', 'faMapMarkerAlt', 'faShoppingCart', 'faBell', 'faEnvelope', 'faHeart', 'faUser'],
      brands: []
    }
  }
}
