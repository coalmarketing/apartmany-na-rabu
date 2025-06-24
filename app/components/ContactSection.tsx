'use client'

import Image from 'next/image'
import { useI18n } from '../i18n/client'

export default function ContactSection() {
  const t = useI18n();

  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-[40px] lato-regular text-[#1D2A40] text-left mb-4">{t('contact.title')}</h2>
        <div className="border-t border-gray-300 w-full max-w-3xl mb-12 text-left mx-0" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16 md:gap-0">
          {/* Kontakt vlevo */}
          <div className="text-[#1D2A40] text-3xl md:text-4xl lato-light">
            <div className="mb-8">
              <div>{t('contact.name')}</div>
              <div>{t('contact.surname')}</div>
            </div>
            <div className="text-lg md:text-xl lato-regular text-[#1D2A40]">
              <div>{t('contact.phone')}</div>
              <div>{t('contact.email')}</div>
            </div>
          </div>
          {/* Logo vpravo */}
          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            <Image
              src="/img/Logo_apartmany_white.svg"
              alt="Apartmány na Rabu"
              width={250}
              height={100}
              className="object-contain"
              style={{ width: 'auto' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 