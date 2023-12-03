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
    city: 'Place',
    autocomplete: 'Find location...',
    weather: 'Weather',
    cities: 'Places',
    temperature: 'Temperature',
    loading: 'Loading...',
    pinCityTip: 'Pin this place',
    alreadyPinnedTip: 'Already pinned place',
    cityUnpinTip: 'Unpin this place',
    removeCityTip: 'Remove this place from list',
    addCityTip: 'Add place to list',
  },
  uk: {
    lang: 'Ukrainian',
    hello: 'Привіт!',
    welcome: 'Ласкаво просимо!',
    flag: './Flag_of_Ukraine.png',
    author: 'Вадим Червоняк',
    toggleLangTip: 'Змінити мову',
    toggleThemeTip: '☀️ Змінити тему 🌑',
    city: 'Місце',
    autocomplete: 'Знайти місце...',
    weather: 'Погода',
    cities: 'Місця',
    temperature: 'Температура',
    loading: 'Завантаження...',
    pinCityTip: 'До збережених',
    alreadyPinnedTip: 'Наразі у збережених',
    cityUnpinTip: 'Видалити зі збережених',
    removeCityTip: 'Видалити зі списку',
    addCityTip: 'Додати до списку',
  },
}

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
