<template>
  <section class="toggle-lang flex-center-start" :title="$t('toggleLangTip')">
    <menu
      v-click-outside="closeMenu"
      class="select"
      :class="{ open: showOptions, close: !showOptions }"
    >
      <li
        v-for="(option, index) in sortedLanguageOptions"
        :key="index"
        @click="handleClick(option.value)"
        :class="{ selected:  selectedLanguage === option.value }"
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
import getIPInfo from '@/helpers/ipInfoHelper'

const languageOptions = Object.keys(i18n.global.messages).map((locale) => ({
  value: locale,
  image: i18n.global.messages[locale].flag,
}))

const selectedLanguage = ref(i18n.global.locale)
const showOptions = ref(false)

const sortedLanguageOptions = computed(() => {
  const sortedOptions = [...languageOptions]
  sortedOptions.sort((o1) => (i18n.global.locale === o1.value ? -1 : 1))
  return sortedOptions
})

const setLanguage = (lang) => {
  i18n.global.locale = lang
  localStorage.setItem('lang', lang)
}

const handleClick = (lang) => {
  setLanguage(lang)
  showOptions.value = !showOptions.value
}

const closeMenu = () => {
  showOptions.value = false
}

onMounted(async () => {
  let defaultLang = localStorage.getItem('lang')

  if (!localStorage.getItem('lang')) {
    const ipInfo = await getIPInfo()
    defaultLang = ipInfo.country.iso_code === 'UA' ? 'uk' : 'en'
    i18n.global.locale = defaultLang
    localStorage.setItem('lang', defaultLang)
  }

  i18n.global.locale = defaultLang
})
</script>

<style lang="scss">
.toggle-lang {
  cursor: pointer;
}

.select {
  top: 0.5rem;
  left: 3rem;
  list-style: none;
  margin: 0;

  border-radius: 0.5rem;
  background: var(--grey);
  box-shadow: inset 0 0 0.5rem 0.25rem var(--shadow);

  padding: 0.5rem 0;

  position: absolute;
  display: flex;

  flex-direction: column;
  overflow: hidden;

  width: 10rem;
  height: auto;


  &-option {
    padding: 0.5rem 1rem;

    &-img {
      width: 8rem;
      height: 4.8rem;
      box-shadow: 0 0 0.5rem 0.25rem var(--shadow);
      border-radius: 0.5rem;
    }
  }

  transition: all 0.5s;
}

.close {
  height: 7rem;
  z-index: 5;
}

.open {
  height: 13rem;
}

.selected {
  font-weight: bold;
}

.open {
  display: flex;
}
</style>
