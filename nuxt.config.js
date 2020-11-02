export default {
  server: {
    port: 8000, // default: 3000
    host: 'localhost' // default: localhost
  },
  axios: {
    proxy:true,
    prefix: '/api',
  },
  proxy: {
    '/api': {
      target: 'http://192.168.1.185:8088',
      changeOrigin: true,
      pathRewrite: {
        '^/api' : '/'
      }
    }
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-test',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/theme.less'
  ],
  styleResources:{
    less:[
      './assets/css/theme.less'
    ]
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '@/plugins/vant-ui', ssr: true},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
    },
    transpile: [/vant.*?less/],
    babel: {
      plugins: [
        [
          "import",
          {
            libraryName: "vant",
            style: name => {
              return `${name}/style/less.js`;
            }
          },
          "vant"
        ]
      ]
    }
  }
}
