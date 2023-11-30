<template>
  <section class="toggle-lang flex-center-start">
    <menu
      v-click-outside="closeMenu"
      class="select"
      :class="{ open: showOptions, close: !showOptions }"
    >
      <li
        v-for="(option, index) in sortedLanguageOptions"
        :key="index"
        @click="handleClick(option.value)"
        :class="{ selected: selectedLanguage === option.value }"
        class="select-option"
      >
        <img :src="option.image" :alt="$t('lang') + ' flag'" class="select-option-img" />
      </li>
    </menu>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import i18n from '../i18n'

const languageOptions = Object.keys(i18n.global.messages).map((locale) => ({
  value: locale,
  image: i18n.global.messages[locale].flag,
}))

const selectedLanguage = ref(i18n.global.locale)
const showOptions = ref(false)

const sortedLanguageOptions = computed(() => {
  const sortedOptions = [...languageOptions]
  sortedOptions.sort((o1, o2) => (selectedLanguage.value === o1.value ? -1 : 1))
  return sortedOptions
})

const setLanguage = (lang) => {
  selectedLanguage.value = lang
  i18n.global.locale = lang
  localStorage.setItem('lang', selectedLanguage.value)
}

const handleClick = (lang) => {
  setLanguage(lang)
  showOptions.value = !showOptions.value
}

const closeMenu = () => {
  showOptions.value = false
}

onMounted(async () => {
  let savedLang = localStorage.getItem('lang')

  if (!savedLang) {
    // Use your IP location detection logic here
    const response = await fetch('https://ipinfo.io')
    const data = await response.json()
    console.log(data)
    savedLang = data.country === 'UA' ? 'uk' : 'en'

    localStorage.setItem('lang', savedLang)
  }

  i18n.global.locale = savedLang
})
</script>

<style lang="scss">
.select {
  top: 0rem;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;

  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 10rem;
  height: auto;

  &-option {
    width: 10rem;
    height: 6rem;
    &-img {
      width: 100%;
      height: 6rem;
      padding: 0 !important;
    }
  }

  transition: all 0.5s;
}

.close {
  height: 6rem !important;
  z-index: 15;
}

.open {
  height: 12rem;
}

.selected {
  font-weight: bold;
}

.open {
  display: flex;
}
</style>
