<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const changeLanguage = (lang: string) => {
    locale.value = lang
    // localStorage.setItem('lang', lang)
}
</script>

<template>
    <div class="flex gap-2">
        <a-button :type="locale === 'en' ? 'primary' : 'default'" @click="changeLanguage('en')">English</a-button>
        <a-button :type="locale === 'la' ? 'primary' : 'default'" @click="changeLanguage('la')">Laos</a-button>
    </div>
    <h1 class="text-2xl">
        {{ $t('hello') }}
    </h1>

</template>
