import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import MenuOverlay from '../components/MenuOverlay';
import LanguageSwitcher from '../components/LanguageSwitcher';
import I18nProviderWrapper from './I18nProviderWrapper';
import { getStaticParams } from '../i18n/server';

export function generateStaticParams() {
  return getStaticParams();
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: 'cs' | 'en' }>;
}) {
  const { locale } = await params;
  
  // Validace locale
  if (locale !== 'cs' && locale !== 'en') {
    notFound();
  }
  
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