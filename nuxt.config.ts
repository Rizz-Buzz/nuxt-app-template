// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  $development: {
    devServer: {
      port: process.env['PORT'] ? parseInt(process.env['PORT']) : undefined
    },
    devtools: { enabled: true }
  },

  runtimeConfig: {
    apiURL: '' // defined by NUXT_API_URL environment variable
  },

  modules: ['@nuxtjs/tailwindcss'],
})