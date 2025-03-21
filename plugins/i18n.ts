import { createI18n } from 'vue-i18n'
import en from '~/locales/en.json'
import la from '~/locales/la.json'
export default defineNuxtPlugin((nuxtApp) => {
    // const savedLocale = localStorage.getItem('lang') ? 'en' : 'la'
    const i18n = createI18n({
        legacy: false, // Use Composition API
        locale: 'en',
        fallbackLocale: 'en',
        messages: {
            en,
            la
        }
    })

    nuxtApp.vueApp.use(i18n)
})
