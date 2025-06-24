'use client'

import Link from 'next/link'
import { useI18n } from './i18n/client'
import ErrorClientRoot from './components/ErrorClientRoot'
import { usePathname } from 'next/navigation'

function NotFoundContent() {
  const t = useI18n()

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">{t('error.not_found')}</h2>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {t('error.back_home')}
        </Link>
      </div>
    </div>
  )
}

export default function NotFound() {
  const pathname = usePathname()
  const locale = pathname?.split('/')[1] as 'cs' | 'en' || 'cs'

  return (
    <ErrorClientRoot locale={locale}>
      <NotFoundContent />
    </ErrorClientRoot>
  )
} 