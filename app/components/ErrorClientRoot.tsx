'use client';

import { I18nProviderClient } from '../i18n/client';

export default function ErrorClientRoot({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: 'cs' | 'en';
}) {
  return (
    <I18nProviderClient locale={locale}>
      {children}
    </I18nProviderClient>
  );
} 