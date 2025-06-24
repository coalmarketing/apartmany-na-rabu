'use client'

import { I18nProviderClient } from '../i18n/client'

export default function ClientRoot({
  children,
  locale,
}: {
  children: React.ReactNode
  locale: string
}) {
  return (
    <I18nProviderClient locale={locale}>
      {children}
    </I18nProviderClient>
  )
} 