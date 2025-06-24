import { createI18nServer } from 'next-international/server'

const locales = {
  cs: () => import('./locales/cs.json'),
  en: () => import('./locales/en.json'),
} as const

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer(locales) 