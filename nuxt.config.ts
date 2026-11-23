// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig( {
  vite: {
    optimizeDeps: {
      include: [ 'better-auth/client/plugins', 'better-auth/vue', 'zod' ],
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [ '@nuxt/ui' ],
  css: [ '~/assets/css/main.css' ],
} )
