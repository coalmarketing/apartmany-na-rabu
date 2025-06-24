'use client'

import { useCurrentLocale } from '../i18n/client'
import { useRouter, usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const locale = useCurrentLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLocale: string) => {
    // Get the current path without the locale prefix
    const pathWithoutLocale = pathname.replace(`/${locale}`, '')
    // Construct new path with new locale
    const newPath = `/${newLocale}${pathWithoutLocale}`
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-1 px-6 py-6 rounded-full border border-white bg-transparent text-white lato-bold text-[12px]" style={{backdropFilter: 'blur(2px)'}}>
      <button
        onClick={() => switchLanguage('cs')}
        className={`focus:outline-none transition-all ${locale === 'cs' ? 'underline underline-offset-4' : ''}`}
        style={{ minWidth: 32 }}
      >
        CZ
      </button>
      <span className="mx-1" />
      <button
        onClick={() => switchLanguage('en')}
        className={`focus:outline-none transition-all ${locale === 'en' ? 'underline underline-offset-4' : ''}`}
        style={{ minWidth: 32 }}
      >
        EN
      </button>
    </div>
  )
} 