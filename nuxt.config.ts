import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/font.css',
    'ant-design-vue/dist/reset.css'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  plugins: [
    { src: "~/plugins/ant-design.ts", mode: "client" },
  ],
  modules: ['@pinia/nuxt'],
})
