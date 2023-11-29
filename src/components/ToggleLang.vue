<template>
  <section class="toggle-lang flex-center-start">
    <select v-model="selectedLanguage" @change="changeLanguage">
      <option value="en">🇺🇸 English</option>
      <option value="uk">🇺🇦 Українська</option>
    </select>

    <select-option :languageOptions="languageOptions" :selectedLanguage="selectedLanguage" :setLanguage="setLanguage"/>

    <img :src="$t('flag')" :alt="$t('lang') + ' flag'">

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import i18n from '../i18n'
import SelectOption from './SelectOption.vue';

const languageOptions = Object.keys(i18n.global.messages).map((locale) => ({
  value: locale,
  image: i18n.global.messages[locale].flag,
}));

const selectedLanguage = ref(i18n.global.locale)

const changeLanguage = () => {
  i18n.global.locale = selectedLanguage.value
  localStorage.setItem('lang', selectedLanguage.value)
};

const setLanguage = ( lang ) => {
  selectedLanguage.value = lang
  i18n.global.locale = lang
  localStorage.setItem('lang', selectedLanguage.value)
};

onMounted(async () => {
  let savedLang = localStorage.getItem('lang');

  if (!savedLang) {
    // Use your IP location detection logic here
    const response = await fetch('https://ipinfo.io')
    const data = await response.json();
    console.log(data)
    savedLang = data.country === 'UA' ? 'uk' : 'en'

    localStorage.setItem('lang', savedLang)
  }

  i18n.global.locale = savedLang
})

</script>