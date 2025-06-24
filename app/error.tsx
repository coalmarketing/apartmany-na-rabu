'use client'

import { useEffect } from 'react'
import { useI18n } from './i18n/client'
import ErrorClientRoot from './components/ErrorClientRoot'
import { usePathname } from 'next/navigation'

function ErrorContent({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useI18n()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">{t('error.title')}</h2>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {t('error.try_again')}
        </button>
      </div>
    </div>
  )
}

export default function Error(props: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const pathname = usePathname()
  const locale = pathname?.split('/')[1] as 'cs' | 'en' || 'cs'

  return (
    <ErrorClientRoot locale={locale}>
      <ErrorContent {...props} />
    </ErrorClientRoot>
  )
} 