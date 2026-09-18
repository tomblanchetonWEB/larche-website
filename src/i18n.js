import { createI18n } from 'vue-i18n'
import fr from './locales/fr.json'
import en from './locales/en.json'

const savedLocale = localStorage.getItem('user-locale')
const browserLang = navigator.language.split('-')[0]

const supportedLocales = ['fr', 'en']

let startingLocale = 'en'

if (savedLocale && supportedLocales.includes(savedLocale)) {
  startingLocale = savedLocale
} else if (supportedLocales.includes(browserLang)) {
  startingLocale = browserLang
}

export const i18n = createI18n({
  legacy: false,
  locale: startingLocale,
  fallbackLocale: 'en',
  messages: { fr, en },
})
