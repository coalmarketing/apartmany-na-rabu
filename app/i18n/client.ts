import { createI18nClient } from 'next-international/client'

const locales = {
  cs: () => import('./locales/cs.json'),
  en: () => import('./locales/en.json'),
} as const

export const { useI18n, useScopedI18n, I18nProviderClient, useCurrentLocale, useChangeLocale } = createI18nClient(locales) 