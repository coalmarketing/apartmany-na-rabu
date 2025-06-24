'use client'
import { I18nProviderClient } from '../i18n/client';
import type { ReactNode } from 'react';

export default function I18nProviderWrapper({ children, locale }: { children: ReactNode, locale: string }) {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
} 