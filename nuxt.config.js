import path from 'path'
import fs from 'fs'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sortea',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },

      // header security
      {name:'X-Content-Type-Options', content:'nosniff'},
      {name:'X-Frame-Options', content:'DENY'},
      {name:'X-XSS-Protection', content:'1; mode=block'},
      {name:'Referrer-Policy', content:'strict-origin-when-cross-origin'},
      {name:'Feature-Policy', content:"geolocations, 'self'"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server:{
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@/utils/randomNumber',
    ['cookie-universal-nuxt',{alias:'cookiz'}],
    // ['@nuxtjs/fontawesome',{
    //   component:'teste',
    //   suffix:true,
    //   icons:{
    //     solid:[
    //       'faHome'
    //     ]
    //   },
    //   imports:[
    //     {
    //       set:'@fortawesome/free-solid-svg-icons',
    //       icons:['faHome']
    //     }
    //   ]
    // }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
