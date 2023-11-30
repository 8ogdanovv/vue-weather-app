import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    lang: 'English',
    hello: 'Hello!',
    welcome: 'Welcome!',
    flag: './Flag_of_the_United_Kingdom.png',
    author: 'Vadym Chervoniak',
    toggleLangTip: 'Change language',
    toggleThemeTip: '☀️ Change theme 🌑',
  },
  uk: {
    lang: 'Ukrainian',
    hello: 'Привіт!',
    welcome: 'Ласкаво просимо!',
    flag: './Flag_of_Ukraine.png',
    author: 'Вадим Червоняк',
    toggleLangTip: 'Змінити мову',
    toggleThemeTip: '☀️ Змінити тему 🌑',
  },
}

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
