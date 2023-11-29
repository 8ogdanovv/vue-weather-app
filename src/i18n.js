// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    lang: 'English',
    hello: 'Hello!',
    welcome: 'Welcome!',
    flag: './Flag_of_the_United_Kingdom.png',
    author: 'Vadym Chervoniak'
  },
  uk: {
    lang: 'Ukrainian',
    hello: 'Привіт!',
    welcome: 'Ласкаво просимо!',
    flag: './Flag_of_Ukraine.png',
    author: 'Вадим Червоняк'
  },
};

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
