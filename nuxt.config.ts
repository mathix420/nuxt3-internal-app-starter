import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'
import StylelintPlugin from 'vite-plugin-stylelint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  vite: {
    plugins: [
      eslintPlugin(),
      StylelintPlugin({
        configFile: 'stylelint.config.js',
      }),
    ],
  },
  nitro: {
    preset: 'cloudflare',
  },
})
