'use client';

import type { ReactNode } from 'react';
import MenuOverlay from '../components/MenuOverlay';
import LanguageSwitcher from '../components/LanguageSwitcher';
import I18nProviderWrapper from './I18nProviderWrapper';
import { useParams } from 'next/navigation';

export default function LocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <I18nProviderWrapper locale={locale}>
      {/* Přepínač jazyků vlevo nahoře */}
      <div className="absolute top-8 left-8 md:top-16 md:left-48 z-50">
        <LanguageSwitcher />
      </div>
      {/* Menu vpravo nahoře */}
      <div className="fixed top-8 right-8 md:top-16 md:right-48 z-50 cursor-pointer">
        <MenuOverlay />
      </div>
      {children}
    </I18nProviderWrapper>
  );
} 