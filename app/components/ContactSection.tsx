'use client'

import Image from 'next/image'
import { useI18n } from '@/app/i18n/client'

export default function ContactSection() {
  const t = useI18n()

  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
       {/* Nadpis a čára */}
       <h2 className="text-[40px] lato-regular text-[#1D2A40] text-left mb-4 px-4">
          {t('contact.title')}
        </h2>
        <div className="border-t border-gray-300 w-full max-w-3xl mb-12 text-left mx-0" />


        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16 md:gap-0">
          {/* Kontakt vlevo */}
          <div className="text-[#3C3C3B] text-3xl md:text-4xl lato-light">
            <div className="mb-8">
              <div>RADEK</div>
              <div>FRYDRYCH</div>
            </div>
            <div className="text-lg md:text-xl lato-regular text-[#3C3C3B]">
              <div>+420 602 235 963</div>
              <div>info@apartmanyrab.cz</div>
            </div>
          </div>
          {/* Logo vpravo */}
          <div className="flex flex-col items-center md:items-end w-full">
            <Image
              src="/img/Logo_apartmany_white.svg"
              alt="Apartmány na Rabu"
              width={300}
              height={100}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 